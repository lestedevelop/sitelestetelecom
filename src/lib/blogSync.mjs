import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const DEFAULT_SYNC_INTERVAL = 60 * 1000;
const DEFAULT_TIMEOUT = 20_000;
const DEFAULT_CONCURRENCY = 4;

export const BLOG_SOURCE = Object.freeze({
    ERP: "erp",
    MOCK: "mock",
});

function positiveInteger(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

export function sanitizeFileName(fileName) {
    if (typeof fileName !== "string") return null;
    const sanitized = path.basename(fileName.trim().replaceAll("\\", "/"));
    if (sanitized.includes("\0")) return null;
    return sanitized && sanitized !== "." && sanitized !== ".." ? sanitized : null;
}

export function resolveCachedImagePath(imageDirectory, fileName) {
    const safeFileName = sanitizeFileName(fileName);
    if (!safeFileName || safeFileName !== fileName) return null;

    const resolvedDirectory = path.resolve(imageDirectory);
    const resolvedFile = path.resolve(resolvedDirectory, safeFileName);
    return path.dirname(resolvedFile) === resolvedDirectory ? resolvedFile : null;
}

export function joinErpUrl(baseUrl, resourcePath) {
    return `${String(baseUrl).replace(/\/+$/, "")}/${String(resourcePath).replace(/^\/+/, "")}`;
}

export function coverFileName(coverImageUrl) {
    if (typeof coverImageUrl !== "string" || !coverImageUrl.trim()) return null;
    try {
        return sanitizeFileName(decodeURIComponent(new URL(coverImageUrl, "http://erp.local").pathname));
    } catch {
        return null;
    }
}

export function isValidBlogSnapshot(payload) {
    return !!(
        payload &&
        typeof payload === "object" &&
        !Array.isArray(payload) &&
        Number.isInteger(payload.version) &&
        Array.isArray(payload.posts) &&
        payload.posts.every((post) =>
            post &&
            typeof post.slug === "string" &&
            post.slug.length > 0 &&
            typeof post.title === "string" &&
            Array.isArray(post.blocks)
        )
    );
}

export function hasScheduledPostDue(snapshot, now = Date.now()) {
    const scheduledAt = Date.parse(snapshot?.nextScheduledAt ?? "");
    return Number.isFinite(scheduledAt) && scheduledAt <= now;
}

function unwrap(payload) {
    return payload && typeof payload === "object" && "data" in payload ? payload.data : payload;
}

async function fileExists(filePath) {
    try {
        const stats = await fs.stat(filePath);
        return stats.isFile();
    } catch (error) {
        if (error?.code === "ENOENT") return false;
        throw error;
    }
}

async function runWithConcurrency(items, limit, worker) {
    let nextIndex = 0;
    const workers = Array.from({length: Math.min(limit, items.length)}, async () => {
        while (nextIndex < items.length) {
            const item = items[nextIndex];
            nextIndex += 1;
            await worker(item);
        }
    });
    await Promise.all(workers);
}

export class BlogSync {
    constructor(options = {}) {
        const workingDirectory = options.workingDirectory || process.cwd();
        this.erpApiUrl = options.erpApiUrl ?? process.env.ERP_API_URL ?? "";
        this.syncInterval = positiveInteger(options.syncInterval ?? process.env.BLOG_SYNC_INTERVAL, DEFAULT_SYNC_INTERVAL);
        this.imageDirectory = options.imageDirectory || process.env.BLOG_IMAGE_DIRECTORY ||
            path.join(workingDirectory, "cache/blog/images");
        this.snapshotPath = options.snapshotPath || process.env.BLOG_SNAPSHOT_PATH ||
            path.join(workingDirectory, "cache/blog.json");
        this.timeout = positiveInteger(options.timeout, DEFAULT_TIMEOUT);
        this.concurrency = positiveInteger(options.concurrency, DEFAULT_CONCURRENCY);
        this.fetch = options.fetch || globalThis.fetch;
        this.now = options.now || Date.now;
        this.snapshot = null;
        this.initializationPromise = null;
        this.syncPromise = null;
        this.lastErrorMessage = null;
        this.timer = null;
        this.started = false;
    }

    async initialize() {
        if (this.initializationPromise) return this.initializationPromise;

        this.initializationPromise = (async () => {
            try {
                const payload = JSON.parse(await fs.readFile(this.snapshotPath, "utf8"));
                if (isValidBlogSnapshot(payload)) this.snapshot = payload;
            } catch (error) {
                if (error?.code !== "ENOENT") console.error("[Blog] Falha ao carregar o cache:", error?.message);
            }
            return this.snapshot;
        })();

        return this.initializationPromise;
    }

    start() {
        if (this.started) return;
        this.started = true;

        void this.initialize().finally(() => {
            void this.sync();
        });

        this.timer = setInterval(() => void this.sync(), this.syncInterval);
        this.timer.unref?.();
    }

    stop() {
        if (this.timer) clearInterval(this.timer);
        this.timer = null;
        this.started = false;
    }

    async getState() {
        await this.initialize();
        const posts = this.snapshot?.posts ?? [];
        return posts.length > 0
            ? {source: BLOG_SOURCE.ERP, snapshot: this.snapshot}
            : {source: BLOG_SOURCE.MOCK, snapshot: null};
    }

    getImagePath(fileName) {
        return resolveCachedImagePath(this.imageDirectory, fileName);
    }

    sync() {
        if (this.syncPromise) return this.syncPromise;

        this.syncPromise = this.performSync()
            .then((snapshot) => {
                this.lastErrorMessage = null;
                return snapshot;
            })
            .catch((error) => {
                if (error?.message !== this.lastErrorMessage) {
                    console.error("[Blog] Sincronização falhou; cache anterior preservado:", error?.message);
                }
                this.lastErrorMessage = error?.message;
                return this.snapshot;
            })
            .finally(() => {
                this.syncPromise = null;
            });

        return this.syncPromise;
    }

    async performSync() {
        if (!this.erpApiUrl) throw new Error("ERP_API_URL não configurada");
        await this.initialize();

        const state = unwrap(await this.requestJson("public/blog/version"));
        if (!state || !Number.isInteger(state.version)) throw new Error("Versão do blog inválida");

        const isCurrent = this.snapshot?.version === state.version &&
            (this.snapshot.nextScheduledAt ?? null) === (state.nextScheduledAt ?? null) &&
            !hasScheduledPostDue(this.snapshot, this.now());
        if (isCurrent) {
            await this.downloadCovers(this.snapshot);
            return this.snapshot;
        }

        const snapshot = unwrap(await this.requestJson("public/blog/snapshot"));
        if (!isValidBlogSnapshot(snapshot)) throw new Error("Snapshot do blog inválido");

        await this.downloadCovers(snapshot);
        await this.writeSnapshot(snapshot);
        this.snapshot = snapshot;
        return snapshot;
    }

    async requestJson(resourcePath) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        try {
            const response = await this.fetch(joinErpUrl(this.erpApiUrl, resourcePath), {signal: controller.signal});
            if (response.status !== 200) throw new Error(`ERP respondeu com status ${response.status}`);
            return await response.json();
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async downloadCovers(snapshot) {
        const covers = new Map();
        for (const post of snapshot.posts) {
            const fileName = coverFileName(post.coverImageUrl);
            if (fileName && !covers.has(fileName)) covers.set(fileName, post.coverImageUrl);
        }
        if (covers.size === 0) return;

        await fs.mkdir(this.imageDirectory, {recursive: true});
        await runWithConcurrency([...covers], this.concurrency, async ([fileName, coverImageUrl]) => {
            try {
                await this.downloadImage(fileName, coverImageUrl);
            } catch (error) {
                console.error(`[Blog] Falha ao baixar a capa ${fileName}:`, error?.message);
            }
        });
    }

    async downloadImage(fileName, coverImageUrl) {
        const destination = this.getImagePath(fileName);
        if (!destination) throw new Error("Nome de imagem inválido");
        if (await fileExists(destination)) return {status: "reused", path: destination};

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        const temporaryPath = path.join(this.imageDirectory, `.${fileName}.${process.pid}.${crypto.randomUUID()}.tmp`);

        try {
            const response = await this.fetch(joinErpUrl(this.erpApiUrl, coverImageUrl), {signal: controller.signal});
            if (response.status !== 200) throw new Error(`Imagem respondeu com status ${response.status}`);

            const receivedType = response.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
            if (!receivedType?.startsWith("image/")) throw new Error("Content-Type de imagem inválido");

            await fs.writeFile(temporaryPath, Buffer.from(await response.arrayBuffer()), {flag: "wx"});
            await fs.rename(temporaryPath, destination);
            return {status: "downloaded", path: destination};
        } catch (error) {
            await fs.rm(temporaryPath, {force: true}).catch(() => {});
            throw error;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async hasCover(fileName) {
        const filePath = this.getImagePath(fileName);
        return filePath ? fileExists(filePath) : false;
    }

    async writeSnapshot(snapshot) {
        const snapshotDirectory = path.dirname(this.snapshotPath);
        await fs.mkdir(snapshotDirectory, {recursive: true});
        const temporaryPath = path.join(
            snapshotDirectory,
            `.${path.basename(this.snapshotPath)}.${process.pid}.${crypto.randomUUID()}.tmp`
        );

        try {
            await fs.writeFile(temporaryPath, JSON.stringify(snapshot, null, 2), {flag: "wx"});
            await fs.rename(temporaryPath, this.snapshotPath);
        } catch (error) {
            await fs.rm(temporaryPath, {force: true}).catch(() => {});
            throw error;
        }
    }
}

const globalKey = Symbol.for("leste.blogSync");
const SERVICE_VERSION = 1;

export function getBlogSync() {
    const currentStore = globalThis[globalKey];
    if (currentStore?.version !== SERVICE_VERSION) {
        currentStore?.service?.stop?.();
        globalThis[globalKey] = {version: SERVICE_VERSION, service: new BlogSync()};
    }
    return globalThis[globalKey].service;
}

export function startBlogSync() {
    getBlogSync().start();
}
