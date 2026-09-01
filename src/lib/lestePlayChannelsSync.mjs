import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const DEFAULT_SYNC_INTERVAL = 5 * 60 * 1000;
const DEFAULT_TIMEOUT = 20_000;
const DEFAULT_CONCURRENCY = 4;

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

export function isValidChannelsPayload(payload) {
    return !!(
        payload &&
        typeof payload === "object" &&
        !Array.isArray(payload) &&
        payload.channelsByPlan &&
        typeof payload.channelsByPlan === "object" &&
        !Array.isArray(payload.channelsByPlan)
    );
}

function publicImageUrl(fileName) {
    return `/api/lesteplay/channels/image/${encodeURIComponent(fileName)}`;
}

export function resolveCachedImagePath(imageDirectory, fileName) {
    const safeFileName = sanitizeFileName(fileName);
    if (!safeFileName || safeFileName !== fileName) return null;

    const resolvedDirectory = path.resolve(imageDirectory);
    const resolvedFile = path.resolve(resolvedDirectory, safeFileName);
    return path.dirname(resolvedFile) === resolvedDirectory ? resolvedFile : null;
}

function toPublicChannel(channel) {
    const fileName = sanitizeFileName(channel?.image?.fileName);
    return {
        id: channel?.id,
        title: channel?.title || "Canal",
        category: channel?.category || null,
        plans: Array.isArray(channel?.plans) ? channel.plans : [],
        image: fileName ? {
            fileName,
            contentType: channel?.image?.contentType || null,
            url: publicImageUrl(fileName),
        } : null,
    };
}

export function toPublicChannelsPayload(payload) {
    if (!isValidChannelsPayload(payload)) return null;

    const channelsByPlan = Object.fromEntries(
        Object.entries(payload.channelsByPlan).map(([planCode, planData]) => {
            const featuredChannels = Array.isArray(planData?.featuredChannels)
                ? planData.featuredChannels.map(toPublicChannel) : [];
            const channels = Array.isArray(planData?.channels)
                ? planData.channels.map(toPublicChannel) : [];

            return [planCode, {
                calculatedTotal: planData?.calculatedTotal,
                totalChannels: planData?.totalChannels,
                remainingChannels: planData?.remainingChannels,
                featuredChannels,
                channels,
            }];
        })
    );

    return {
        schemaVersion: payload.schemaVersion,
        generatedAt: payload.generatedAt,
        categories: Array.isArray(payload.categories) ? payload.categories : [],
        plans: Array.isArray(payload.plans) ? payload.plans : [],
        channelsByPlan,
    };
}

function collectDisplayedImages(payload) {
    const images = new Map();

    for (const planData of Object.values(payload.channelsByPlan)) {
        const displayedChannels = [
            ...(planData?.featuredChannels || []),
            ...(planData?.channels || []),
        ];
        for (const channel of displayedChannels) {
            const fileName = sanitizeFileName(channel?.image?.fileName);
            const imagePath = channel?.image?.url;
            if (fileName && typeof imagePath === "string" && !images.has(fileName)) {
                images.set(fileName, {
                    fileName,
                    imagePath,
                    contentType: channel.image.contentType,
                });
            }
        }
    }

    return [...images.values()];
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

export class LestePlayChannelsSync {
    constructor(options = {}) {
        const workingDirectory = options.workingDirectory || process.cwd();
        this.apiBaseUrl = options.apiBaseUrl ?? process.env.API_BASE_URL ?? process.env.CORE_API_URL;
        this.apiKey = options.apiKey ?? process.env.INSTITUCIONAL_KEY ?? "";
        this.syncInterval = positiveInteger(
            options.syncInterval ?? process.env.LESTEPLAY_CHANNELS_SYNC_INTERVAL,
            DEFAULT_SYNC_INTERVAL
        );
        this.imageDirectory = options.imageDirectory || process.env.LESTEPLAY_CHANNELS_IMAGE_DIRECTORY ||
            path.join(workingDirectory, "public/images/lesteplay/channels");
        this.snapshotPath = options.snapshotPath || process.env.LESTEPLAY_CHANNELS_SNAPSHOT_PATH ||
            path.join(workingDirectory, "cache/lesteplay-channels.json");
        this.timeout = positiveInteger(options.timeout, DEFAULT_TIMEOUT);
        this.concurrency = positiveInteger(options.concurrency, DEFAULT_CONCURRENCY);
        this.fetch = options.fetch || globalThis.fetch;
        this.snapshot = null;
        this.initializationPromise = null;
        this.syncPromise = null;
        this.lastSyncAttemptAt = 0;
        this.timer = null;
        this.started = false;
    }

    async initialize() {
        if (this.initializationPromise) return this.initializationPromise;

        this.initializationPromise = (async () => {
            try {
                const contents = await fs.readFile(this.snapshotPath, "utf8");
                const payload = JSON.parse(contents);
                if (isValidChannelsPayload(payload)) this.snapshot = payload;
            } catch (error) {
                if (error?.code !== "ENOENT") {
                    console.error("[LestePlay] Falha ao carregar snapshot:", error?.message);
                }
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

    async getPublicSnapshot() {
        await this.initialize();
        return toPublicChannelsPayload(this.snapshot);
    }

    getImagePath(fileName) {
        return resolveCachedImagePath(this.imageDirectory, fileName);
    }

    sync() {
        if (this.syncPromise) return this.syncPromise;

        this.lastSyncAttemptAt = Date.now();
        this.syncPromise = this.performSync()
            .catch((error) => {
                console.error("[LestePlay] Sincronização falhou; cache anterior preservado:", error?.message);
                return this.snapshot;
            })
            .finally(() => {
                this.syncPromise = null;
            });

        return this.syncPromise;
    }

    syncIfStale(maxAge = 30_000) {
        const staleAfter = positiveInteger(maxAge, 30_000);
        if (this.syncPromise) return this.syncPromise;
        if (Date.now() - this.lastSyncAttemptAt < staleAfter) {
            return Promise.resolve(this.snapshot);
        }
        return this.sync();
    }

    async performSync() {
        if (!this.apiBaseUrl) throw new Error("API_BASE_URL não configurada");

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        let payload;

        try {
            const response = await this.fetch(new URL("/api/sac/externo/channels", this.apiBaseUrl), {
                headers: this.apiKey ? {institucionalsessionid: this.apiKey} : undefined,
                signal: controller.signal,
            });
            if (response.status !== 200) throw new Error(`API respondeu com status ${response.status}`);
            payload = await response.json();
        } finally {
            clearTimeout(timeoutId);
        }

        if (!isValidChannelsPayload(payload)) throw new Error("Resposta da API inválida");

        await fs.mkdir(this.imageDirectory, {recursive: true});
        const images = collectDisplayedImages(payload);
        await runWithConcurrency(images, this.concurrency, (image) => this.downloadImage(image));
        await this.writeSnapshot(payload);
        this.snapshot = payload;
        return payload;
    }

    async downloadImage({fileName, imagePath, contentType}) {
        const safeFileName = sanitizeFileName(fileName);
        if (!safeFileName) throw new Error("Nome de imagem inválido");

        const destination = path.join(this.imageDirectory, safeFileName);
        if (await fileExists(destination)) return {status: "reused", path: destination};

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        const temporaryPath = path.join(
            this.imageDirectory,
            `.${safeFileName}.${process.pid}.${crypto.randomUUID()}.tmp`
        );

        try {
            const response = await this.fetch(new URL(imagePath, this.apiBaseUrl), {
                headers: this.apiKey ? {institucionalsessionid: this.apiKey} : undefined,
                signal: controller.signal,
            });
            if (response.status !== 200) throw new Error(`Imagem respondeu com status ${response.status}`);

            const receivedType = response.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
            const expectedType = contentType?.split(";", 1)[0]?.trim().toLowerCase();
            if (!receivedType?.startsWith("image/") || (expectedType && receivedType !== expectedType)) {
                throw new Error("Content-Type de imagem inválido");
            }

            const bytes = Buffer.from(await response.arrayBuffer());
            await fs.writeFile(temporaryPath, bytes, {flag: "wx"});
            await fs.rename(temporaryPath, destination);
            return {status: "downloaded", path: destination};
        } catch (error) {
            await fs.rm(temporaryPath, {force: true}).catch(() => {});
            throw error;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async writeSnapshot(payload) {
        const snapshotDirectory = path.dirname(this.snapshotPath);
        await fs.mkdir(snapshotDirectory, {recursive: true});
        const temporaryPath = path.join(
            snapshotDirectory,
            `.${path.basename(this.snapshotPath)}.${process.pid}.${crypto.randomUUID()}.tmp`
        );

        try {
            await fs.writeFile(temporaryPath, JSON.stringify(payload, null, 2), {flag: "wx"});
            await fs.rename(temporaryPath, this.snapshotPath);
        } catch (error) {
            await fs.rm(temporaryPath, {force: true}).catch(() => {});
            throw error;
        }
    }
}

const globalKey = Symbol.for("lestePlay.channelsSync");
const globalStore = globalThis;
const SERVICE_VERSION = 4;

export function getLestePlayChannelsSync() {
    const currentStore = globalStore[globalKey];
    if (currentStore?.version !== SERVICE_VERSION) {
        currentStore?.service?.stop?.();
        currentStore?.stop?.();
        globalStore[globalKey] = {
            version: SERVICE_VERSION,
            service: new LestePlayChannelsSync(),
        };
    }
    return globalStore[globalKey].service;
}

export function startLestePlayChannelsSync() {
    getLestePlayChannelsSync().start();
}
