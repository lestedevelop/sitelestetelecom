import {useEffect, useState} from "react";

const MOCK_PAYLOAD = Object.freeze({source: "mock", posts: []});

let cachedPayload = null;
let pendingRequest = null;

function loadNews() {
    if (cachedPayload) return Promise.resolve(cachedPayload);
    if (pendingRequest) return pendingRequest;

    pendingRequest = fetch("/api/blog/news", {cache: "no-store"})
        .then(async (response) => {
            if (!response.ok) throw new Error(`Falha ao carregar novidades (${response.status})`);
            cachedPayload = (await response.json()) || MOCK_PAYLOAD;
            return cachedPayload;
        })
        .catch((error) => {
            console.error("Falha ao carregar novidades do blog:", error?.message);
            return MOCK_PAYLOAD;
        })
        .finally(() => {
            pendingRequest = null;
        });

    return pendingRequest;
}

export function useBlogNews() {
    const [payload, setPayload] = useState(cachedPayload);

    useEffect(() => {
        let disposed = false;
        void loadNews().then((result) => {
            if (!disposed) setPayload(result);
        });
        return () => {
            disposed = true;
        };
    }, []);

    return payload;
}
