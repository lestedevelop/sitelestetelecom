import {coreApi} from "@/lib/coreApi";

const pendingRefreshByCity = new Map();

export async function getHomeContent(codcid) {
    const normalizedCodcid = String(codcid || "").trim();
    const requestKey = normalizedCodcid || "all";
    const pendingRefresh = pendingRefreshByCity.get(requestKey);
    if (pendingRefresh) return pendingRefresh;

    const refresh = (async () => {
        const response = await coreApi.get("/api/sac/externo/home", {
            params: normalizedCodcid ? {codcid: normalizedCodcid} : undefined,
        });
        return {payload: response.data, status: "BYPASS"};
    })();
    pendingRefreshByCity.set(requestKey, refresh);

    try {
        return await refresh;
    } finally {
        pendingRefreshByCity.delete(requestKey);
    }
}
