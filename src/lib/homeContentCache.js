import {coreApi} from "@/lib/coreApi";

let pendingRefresh = null;

export async function getHomeContent() {
    if (pendingRefresh) return pendingRefresh;

    pendingRefresh = (async () => {
        const response = await coreApi.get("/api/sac/externo/home");
        return {payload: response.data, status: "BYPASS"};
    })();

    try {
        return await pendingRefresh;
    } finally {
        pendingRefresh = null;
    }
}
