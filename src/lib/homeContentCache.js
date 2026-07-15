import {coreApi} from "@/lib/coreApi";

let cachedHome = null;
let pendingRefresh = null;

async function fetchCompleteHome(version) {
    const response = await coreApi.get("/api/sac/externo/home");
    cachedHome = {
        version,
        payload: response.data,
    };

    return {payload: cachedHome.payload, status: "MISS"};
}

export async function getHomeContent() {
    if (pendingRefresh) return pendingRefresh;

    pendingRefresh = (async () => {
        try {
            const versionResponse = await coreApi.get("/api/sac/externo/home/version");
            const version = versionResponse.data?.version;

            if (!version) {
                throw new Error("A rota de versao da home nao retornou version");
            }

            if (cachedHome?.version === version) {
                return {payload: cachedHome.payload, status: "HIT"};
            }

            return await fetchCompleteHome(version);
        } catch (versionError) {
            if (cachedHome) {
                console.warn("HOME VERSION FAIL: usando cache existente", {
                    message: versionError?.message,
                });
                return {payload: cachedHome.payload, status: "STALE"};
            }

            const payload = await coreApi.get("/api/sac/externo/home");
            return {payload: payload.data, status: "BYPASS"};
        }
    })();

    try {
        return await pendingRefresh;
    } finally {
        pendingRefresh = null;
    }
}
