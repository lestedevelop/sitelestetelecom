import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const {
    BLOG_SOURCE,
    BlogSync,
    coverFileName,
    hasScheduledPostDue,
    joinErpUrl,
    resolveCachedImagePath,
} = await import(new URL("../src/lib/blogSync.mjs", import.meta.url));

const ERP_API_URL = "https://erp.test/api";
const COVER_URL = "/storage/communication/blog/covers/2026/10/capa.webp";

function post(slug, overrides = {}) {
    return {slug, title: `Post ${slug}`, coverImageUrl: COVER_URL, blocks: [], ...overrides};
}

function snapshot(version, posts, nextScheduledAt = null) {
    return {version, generatedAt: "2026-10-23T12:00:00.000Z", nextScheduledAt, categories: [], posts};
}

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {status, headers: {"content-type": "application/json"}});
}

function fakeErp(routes) {
    const calls = [];
    const fetch = async (url) => {
        calls.push(url);
        const handler = routes[url];
        if (!handler) return new Response(null, {status: 404});
        return handler();
    };
    return {calls, fetch};
}

async function createSync(t, options) {
    const directory = await fs.mkdtemp(path.join(os.tmpdir(), "blog-sync-"));
    t.after(() => fs.rm(directory, {recursive: true, force: true}));
    return new BlogSync({erpApiUrl: ERP_API_URL, workingDirectory: directory, ...options});
}

function erpWith(version, body, extraRoutes = {}) {
    return fakeErp({
        [`${ERP_API_URL}/public/blog/version`]: () => jsonResponse({data: {version, nextScheduledAt: body.nextScheduledAt}}),
        [`${ERP_API_URL}/public/blog/snapshot`]: () => jsonResponse({data: body}),
        [`${ERP_API_URL}${COVER_URL}`]: () => new Response(Buffer.from("img"), {headers: {"content-type": "image/webp"}}),
        ...extraRoutes,
    });
}

test("monta a URL do ERP mantendo o /api e extrai o nome da capa", () => {
    assert.equal(joinErpUrl("https://erp.test/api/", "/public/blog/version"), "https://erp.test/api/public/blog/version");
    assert.equal(joinErpUrl(ERP_API_URL, COVER_URL), `https://erp.test/api${COVER_URL}`);
    assert.equal(coverFileName(COVER_URL), "capa.webp");
    assert.equal(coverFileName(""), null);
    assert.equal(coverFileName(null), null);
});

test("recusa nomes de arquivo que saem do diretório das capas", () => {
    assert.equal(resolveCachedImagePath("/tmp/capas", "../segredo"), null);
    assert.equal(resolveCachedImagePath("/tmp/capas", "a/b.webp"), null);
    assert.equal(resolveCachedImagePath("/tmp/capas", "capa.webp"), path.resolve("/tmp/capas/capa.webp"));
});

test("com snapshot de ao menos um post usa o ERP, grava o cache e baixa a capa", async (t) => {
    const erp = erpWith(3, snapshot(3, [post("um")]));
    const sync = await createSync(t, {fetch: erp.fetch});

    await sync.sync();
    const state = await sync.getState();

    assert.equal(state.source, BLOG_SOURCE.ERP);
    assert.equal(state.snapshot.posts[0].slug, "um");
    assert.equal(JSON.parse(await fs.readFile(sync.snapshotPath, "utf8")).version, 3);
    assert.equal(await sync.hasCover("capa.webp"), true);
});

test("com o ERP fora do ar continua o cache anterior", async (t) => {
    const first = erpWith(3, snapshot(3, [post("um")]));
    const sync = await createSync(t, {fetch: first.fetch});
    await sync.sync();

    const restarted = new BlogSync({
        erpApiUrl: ERP_API_URL,
        snapshotPath: sync.snapshotPath,
        imageDirectory: sync.imageDirectory,
        fetch: async () => {
            throw new Error("ECONNREFUSED");
        },
    });
    await restarted.sync();
    const state = await restarted.getState();

    assert.equal(state.source, BLOG_SOURCE.ERP);
    assert.equal(state.snapshot.posts[0].slug, "um");
});

test("sem cache e com o ERP fora do ar usa o mock", async (t) => {
    const sync = await createSync(t, {
        fetch: async () => {
            throw new Error("ECONNREFUSED");
        },
    });

    await sync.sync();
    assert.deepEqual(await sync.getState(), {source: BLOG_SOURCE.MOCK, snapshot: null});
});

test("sem ERP_API_URL usa o mock sem chamar a rede", async (t) => {
    const erp = fakeErp({});
    const sync = await createSync(t, {erpApiUrl: "", fetch: erp.fetch});

    await sync.sync();
    assert.equal((await sync.getState()).source, BLOG_SOURCE.MOCK);
    assert.equal(erp.calls.length, 0);
});

test("snapshot válido com zero posts usa o mock, mesmo com cache anterior", async (t) => {
    const first = erpWith(3, snapshot(3, [post("um")]));
    const sync = await createSync(t, {fetch: first.fetch});
    await sync.sync();

    sync.fetch = erpWith(4, snapshot(4, [])).fetch;
    await sync.sync();

    assert.equal((await sync.getState()).source, BLOG_SOURCE.MOCK);
});

test("snapshot inválido mantém o retrato anterior", async (t) => {
    const first = erpWith(3, snapshot(3, [post("um")]));
    const sync = await createSync(t, {fetch: first.fetch});
    await sync.sync();

    sync.fetch = erpWith(4, {version: 4, posts: [{slug: ""}]}).fetch;
    await sync.sync();
    const state = await sync.getState();

    assert.equal(state.source, BLOG_SOURCE.ERP);
    assert.equal(state.snapshot.version, 3);
});

test("com a mesma versão não baixa o snapshot de novo", async (t) => {
    const erp = erpWith(3, snapshot(3, [post("um")]));
    const sync = await createSync(t, {fetch: erp.fetch});

    await sync.sync();
    await sync.sync();

    const snapshotCalls = erp.calls.filter((url) => url.endsWith("/public/blog/snapshot"));
    assert.equal(snapshotCalls.length, 1);
});

test("baixa o snapshot de novo quando o post agendado já deveria estar no ar", async (t) => {
    const scheduledAt = "2026-10-23T15:00:00.000Z";
    const erp = erpWith(3, snapshot(3, [post("um")], scheduledAt));
    let now = Date.parse("2026-10-23T14:59:00.000Z");
    const sync = await createSync(t, {fetch: erp.fetch, now: () => now});

    await sync.sync();
    await sync.sync();
    now = Date.parse("2026-10-23T15:00:30.000Z");
    await sync.sync();

    const snapshotCalls = erp.calls.filter((url) => url.endsWith("/public/blog/snapshot"));
    assert.equal(snapshotCalls.length, 2);
    assert.equal(hasScheduledPostDue({nextScheduledAt: scheduledAt}, now), true);
    assert.equal(hasScheduledPostDue({nextScheduledAt: null}, now), false);
});

test("baixa o snapshot de novo quando o ERP anuncia um agendamento que o retrato não tem", async (t) => {
    let nextScheduledAt = null;
    const erp = fakeErp({
        [`${ERP_API_URL}/public/blog/version`]: () => jsonResponse({data: {version: 3, nextScheduledAt}}),
        [`${ERP_API_URL}/public/blog/snapshot`]: () => jsonResponse({data: snapshot(3, [post("um")], nextScheduledAt)}),
        [`${ERP_API_URL}${COVER_URL}`]: () => new Response(Buffer.from("img"), {headers: {"content-type": "image/webp"}}),
    });
    const sync = await createSync(t, {fetch: erp.fetch, now: () => Date.parse("2026-10-23T12:00:00.000Z")});

    await sync.sync();
    nextScheduledAt = "2026-10-23T15:00:00.000Z";
    await sync.sync();
    await sync.sync();

    const snapshotCalls = erp.calls.filter((url) => url.endsWith("/public/blog/snapshot"));
    assert.equal(snapshotCalls.length, 2);
    assert.equal(sync.snapshot.nextScheduledAt, nextScheduledAt);
});

test("capa que falha não derruba a sincronização e é tentada de novo depois", async (t) => {
    let coverStatus = 500;
    const erp = erpWith(3, snapshot(3, [post("um")]), {
        [`${ERP_API_URL}${COVER_URL}`]: () =>
            new Response(Buffer.from("img"), {status: coverStatus, headers: {"content-type": "image/webp"}}),
    });
    const sync = await createSync(t, {fetch: erp.fetch});
    t.mock.method(console, "error", () => {});

    await sync.sync();
    assert.equal((await sync.getState()).source, BLOG_SOURCE.ERP);
    assert.equal(await sync.hasCover("capa.webp"), false);

    coverStatus = 200;
    await sync.sync();
    assert.equal(await sync.hasCover("capa.webp"), true);
});

test("recusa capa que não é imagem", async (t) => {
    const erp = erpWith(3, snapshot(3, [post("um")]), {
        [`${ERP_API_URL}${COVER_URL}`]: () => new Response("<html>", {headers: {"content-type": "text/html"}}),
    });
    const sync = await createSync(t, {fetch: erp.fetch});
    t.mock.method(console, "error", () => {});

    await sync.sync();
    assert.equal(await sync.hasCover("capa.webp"), false);
});
