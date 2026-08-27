import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import {
    getCardPlanCode,
    getPlanDataForCard,
    shouldShowRemainingChannels,
    buildApiChannelSections,
    getFeaturedChannelsLayout,
    getChannelBadgeCount,
} from "../src/lib/lestePlayChannelsShared.mjs";
import {
    LestePlayChannelsSync,
    sanitizeFileName,
} from "../src/lib/lestePlayChannelsSync.mjs";

function channel(id, fileName = `channel_${id}.png`) {
    return {
        id,
        title: `Canal ${id}`,
        image: {
            fileName,
            contentType: "image/png",
            url: `/api/sac/externo/channels/image?id=${id}`,
        },
    };
}

function payload({generatedAt = "new", plans = {start: [channel(1)]}} = {}) {
    return {
        schemaVersion: 4,
        generatedAt,
        plans: [],
        categories: [],
        channelsByPlan: Object.fromEntries(
            Object.entries(plans).map(([code, featuredChannels]) => [code, {
                calculatedTotal: featuredChannels.length,
                totalChannels: featuredChannels.length + 10,
                remainingChannels: 10,
                featuredChannels,
                channels: featuredChannels,
            }])
        ),
    };
}

async function temporaryConfig(t, fetchImplementation) {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "lesteplay-test-"));
    t.after(() => fs.rm(root, {recursive: true, force: true}));
    return {
        root,
        imageDirectory: path.join(root, "public/images/lesteplay/channels"),
        snapshotPath: path.join(root, "cache/lesteplay-channels.json"),
        service: new LestePlayChannelsSync({
            apiBaseUrl: "https://api.test",
            imageDirectory: path.join(root, "public/images/lesteplay/channels"),
            snapshotPath: path.join(root, "cache/lesteplay-channels.json"),
            fetch: fetchImplementation,
            timeout: 2_000,
        }),
    };
}

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {"content-type": "application/json"},
    });
}

function imageResponse(body = "image") {
    return new Response(body, {
        status: 200,
        headers: {"content-type": "image/png"},
    });
}

test("associa os códigos dos cards aos planos da API", () => {
    assert.equal(getCardPlanCode("start"), "start");
    assert.equal(getCardPlanCode("sports"), "sports");
    assert.equal(getCardPlanCode("cine"), "hbo");
    assert.equal(getCardPlanCode("family"), "family");
});

test("preserva a ordem de featuredChannels e usa os totais da API", () => {
    const featuredChannels = [channel(3), channel(1), channel(2)];
    const result = getPlanDataForCard({
        hbo: {featuredChannels, remainingChannels: 27, totalChannels: 30},
    }, "cine");

    assert.deepEqual(result.featuredChannels.map((item) => item.id), [3, 1, 2]);
    assert.equal(result.remainingChannels, 27);
    assert.equal(result.totalChannels, 30);
});

test("exibe remainingChannels recebido da API quando positivo", () => {
    assert.equal(shouldShowRemainingChannels({remainingChannels: 8}), true);
});

test("oculta o bloco de remainingChannels quando for zero", () => {
    assert.equal(shouldShowRemainingChannels({remainingChannels: 0}), false);
});

test("usa totalChannels no contador comercial do card", () => {
    assert.equal(getChannelBadgeCount({totalChannels: 86, remainingChannels: 80}), 86);
    assert.equal(getChannelBadgeCount({totalChannels: 0, remainingChannels: 0}), 0);
});

test("monta o modal com os canais da API na ordem das categorias e dos canais", () => {
    const sections = buildApiChannelSections({channels: [
        {...channel(2), category: "Notícias"},
        {...channel(1), category: "Esportes"},
        {...channel(3), category: "Notícias"},
    ]}, ["Esportes", "Notícias"]);

    assert.deepEqual(sections.map((section) => section.title), ["Esportes", "Notícias"]);
    assert.deepEqual(sections[1].channels.map((item) => item.id), [2, 3]);
});

test("adapta a grade de destaques de um a quatro canais", () => {
    const featuredChannels = [1, 2, 3, 4].map((id) => ({
        id,
        image: {url: `/images/channel-${id}.png`},
    }));

    assert.deepEqual(getFeaturedChannelsLayout({
        featuredChannels: featuredChannels.slice(0, 1),
        totalChannels: 11,
        remainingChannels: 10,
    }), {featuredCount: 1, itemCount: 2, columns: 2});
    assert.equal(getFeaturedChannelsLayout({
        featuredChannels: featuredChannels.slice(0, 2),
        totalChannels: 12,
        remainingChannels: 10,
    }).columns, 3);
    assert.equal(getFeaturedChannelsLayout({
        featuredChannels: featuredChannels.slice(0, 3),
        totalChannels: 13,
        remainingChannels: 10,
    }).columns, 2);
    assert.equal(getFeaturedChannelsLayout({
        featuredChannels,
        totalChannels: 14,
        remainingChannels: 10,
    }).columns, 3);
});

test("reutiliza uma imagem que já existe", async (t) => {
    let imageRequests = 0;
    const responsePayload = payload();
    const config = await temporaryConfig(t, async (url) => {
        if (new URL(url).pathname.endsWith("/channels")) return jsonResponse(responsePayload);
        imageRequests += 1;
        return imageResponse();
    });
    await fs.mkdir(config.imageDirectory, {recursive: true});
    await fs.writeFile(path.join(config.imageDirectory, "channel_1.png"), "existing");

    await config.service.sync();

    assert.equal(imageRequests, 0);
    assert.equal(await fs.readFile(path.join(config.imageDirectory, "channel_1.png"), "utf8"), "existing");
});

test("baixa uma imagem ausente e publica somente a URL local", async (t) => {
    const config = await temporaryConfig(t, async (url) => {
        if (new URL(url).pathname.endsWith("/channels")) return jsonResponse(payload());
        return imageResponse("downloaded");
    });

    await config.service.sync();
    const publicSnapshot = await config.service.getPublicSnapshot();

    assert.equal(await fs.readFile(path.join(config.imageDirectory, "channel_1.png"), "utf8"), "downloaded");
    assert.equal(publicSnapshot.channelsByPlan.start.featuredChannels[0].image.url,
        "/images/lesteplay/channels/channel_1.png");
});

test("sanitiza fileName com path.basename", () => {
    assert.equal(sanitizeFileName("../../outside/channel.png"), "channel.png");
    assert.equal(sanitizeFileName("..\\outside\\channel.png"), "channel.png");
    assert.equal(sanitizeFileName(".."), null);
});

test("falha da API mantém o snapshot anterior", async (t) => {
    const config = await temporaryConfig(t, async () => jsonResponse({error: true}, 503));
    await fs.mkdir(path.dirname(config.snapshotPath), {recursive: true});
    await fs.writeFile(config.snapshotPath, JSON.stringify(payload({generatedAt: "old", plans: {}})));
    await config.service.initialize();

    await config.service.sync();

    assert.equal((await config.service.getPublicSnapshot()).generatedAt, "old");
});

test("falha no download mantém os dados e o snapshot anteriores", async (t) => {
    const oldPayload = payload({generatedAt: "old", plans: {}});
    const newPayload = payload({generatedAt: "new"});
    const config = await temporaryConfig(t, async (url) => {
        if (new URL(url).pathname.endsWith("/channels")) return jsonResponse(newPayload);
        return new Response("fail", {status: 500});
    });
    await fs.mkdir(path.dirname(config.snapshotPath), {recursive: true});
    await fs.mkdir(config.imageDirectory, {recursive: true});
    await fs.writeFile(path.join(config.imageDirectory, "previous.png"), "previous-image");
    await fs.writeFile(config.snapshotPath, JSON.stringify(oldPayload));
    await config.service.initialize();

    await config.service.sync();

    assert.equal((await config.service.getPublicSnapshot()).generatedAt, "old");
    assert.equal(JSON.parse(await fs.readFile(config.snapshotPath, "utf8")).generatedAt, "old");
    assert.equal(await fs.readFile(path.join(config.imageDirectory, "previous.png"), "utf8"), "previous-image");
});

test("não duplica downloads do mesmo destaque entre planos", async (t) => {
    let imageRequests = 0;
    const sharedChannel = channel(7, "shared.png");
    const responsePayload = payload({plans: {start: [sharedChannel], family: [sharedChannel]}});
    const config = await temporaryConfig(t, async (url) => {
        if (new URL(url).pathname.endsWith("/channels")) return jsonResponse(responsePayload);
        imageRequests += 1;
        return imageResponse();
    });

    await config.service.sync();

    assert.equal(imageRequests, 1);
});

test("bloqueia sincronizações concorrentes", async (t) => {
    let apiRequests = 0;
    let releaseRequest;
    const requestGate = new Promise((resolve) => { releaseRequest = resolve; });
    const config = await temporaryConfig(t, async (url) => {
        if (new URL(url).pathname.endsWith("/channels")) {
            apiRequests += 1;
            await requestGate;
            return jsonResponse(payload({plans: {}}));
        }
        return imageResponse();
    });

    const firstSync = config.service.sync();
    const secondSync = config.service.sync();
    releaseRequest();
    await Promise.all([firstSync, secondSync]);

    assert.equal(apiRequests, 1);
});
