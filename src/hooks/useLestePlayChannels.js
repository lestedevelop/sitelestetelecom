import {useEffect, useState} from "react";

const INITIAL_RETRY_INTERVAL = 2_000;
const REFRESH_INTERVAL = 30_000;

let cachedPayload = null;
let pendingRequest = null;
let refreshTimer = null;
const listeners = new Set();

function notify() {
    for (const listener of listeners) listener(cachedPayload);
}

function scheduleRefresh(delay) {
    if (refreshTimer) clearTimeout(refreshTimer);
    if (!listeners.size) return;
    refreshTimer = setTimeout(() => void loadChannels(), delay);
}

function loadChannels() {
    if (pendingRequest) return pendingRequest;

    pendingRequest = fetch("/api/lesteplay/channels", {cache: "no-store"})
        .then(async (response) => {
            if (!response.ok) throw new Error(`Falha ao carregar canais (${response.status})`);
            const payload = await response.json();
            cachedPayload = payload || {plans: [], channelsByPlan: {}};
            notify();
            const hasPlans = Object.keys(cachedPayload.channelsByPlan || {}).length > 0;
            scheduleRefresh(hasPlans ? REFRESH_INTERVAL : INITIAL_RETRY_INTERVAL);
        })
        .catch((error) => {
            console.error("Falha ao carregar canais LestePlay:", error?.message);
            scheduleRefresh(INITIAL_RETRY_INTERVAL);
        })
        .finally(() => {
            pendingRequest = null;
        });

    return pendingRequest;
}

export function useLestePlayChannels() {
    const [payload, setPayload] = useState(cachedPayload);

    useEffect(() => {
        listeners.add(setPayload);
        void loadChannels();
        return () => {
            listeners.delete(setPayload);
            if (!listeners.size && refreshTimer) {
                clearTimeout(refreshTimer);
                refreshTimer = null;
            }
        };
    }, []);

    return payload;
}
