const DEFAULT_ENDPOINT = "/api/monitor/events";
const TOKEN_ENDPOINT = "/api/monitor/token";
const STORAGE_KEY = "monitoring_queue_v1";

const globalScope = typeof window !== "undefined" ? window : globalThis;
const state =
    globalScope.__monitoringState ||
    {
        initialized: false,
        queue: [],
        sending: false,
        token: "",
        tokenExp: 0,
        lastFlush: 0,
        rate: { count: 0, resetAt: 0 },
        dedup: new Map(),
        originalConsole: null,
        consoleWrapped: false,
        fetchWrapped: false,
    };

globalScope.__monitoringState = state;

function now() {
    return Date.now();
}

function safeStringify(value) {
    try {
        if (typeof value === "string") return value;
        return JSON.stringify(value);
    } catch {
        return "[unserializable]";
    }
}

function buildBodySnippet(body) {
    if (body == null) return undefined;
    if (typeof body === "string") return body.slice(0, 4000);
    if (body instanceof URLSearchParams) return body.toString().slice(0, 4000);
    if (body instanceof FormData) {
        const out = {};
        for (const [key, value] of body.entries()) {
            if (typeof value === "string") {
                out[key] = value;
            } else if (value && typeof value === "object") {
                out[key] = {
                    name: value.name,
                    type: value.type,
                    size: value.size,
                };
            } else {
                out[key] = String(value);
            }
        }
        return JSON.stringify(out).slice(0, 4000);
    }
    if (typeof body === "object") return safeStringify(body).slice(0, 4000);
    return String(body).slice(0, 4000);
}

function getRequestBodySnippet(input, init) {
    if (init && Object.prototype.hasOwnProperty.call(init, "body")) {
        return buildBodySnippet(init.body);
    }
    return undefined;
}

async function getRequestBodySnippetAsync(input, init) {
    const direct = getRequestBodySnippet(input, init);
    if (direct) return direct;

    if (typeof Request !== "undefined" && input instanceof Request) {
        try {
            const clone = input.clone();
            const contentType = clone.headers.get("content-type") || "";
            if (contentType.includes("application/json") || contentType.includes("text/")) {
                const text = await clone.text();
                return text.slice(0, 4000);
            }
            if (contentType.includes("application/x-www-form-urlencoded")) {
                const text = await clone.text();
                return text.slice(0, 4000);
            }
            if (contentType.includes("multipart/form-data")) {
                const form = await clone.formData();
                return buildBodySnippet(form);
            }
        } catch {
            return undefined;
        }
    }

    return undefined;
}

function loadQueue() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveQueue(queue) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(queue.slice(0, 200)));
    } catch {
        // ignore
    }
}

function shouldSample(level, sampleRate) {
    if (level === "error" || level === "fatal") return true;
    if (level === "warn") return true;
    if (level === "info") return Math.random() < sampleRate;
    return true;
}

function allowByRateLimit(level, limit, windowMs) {
    if (level === "error" || level === "fatal") return true;
    const t = now();
    if (t > state.rate.resetAt) {
        state.rate = { count: 0, resetAt: t + windowMs };
    }
    state.rate.count += 1;
    return state.rate.count <= limit;
}

function dedupKey(event) {
    return `${event.type || ""}|${event.level || ""}|${event.message || ""}|${event.stack || ""}|${event.page || ""}`;
}

function isDuplicate(event, ttlMs) {
    const key = dedupKey(event);
    const t = now();
    const last = state.dedup.get(key);
    if (last && t - last < ttlMs) return true;
    state.dedup.set(key, t);
    return false;
}

async function getToken() {
    const t = now();
    if (state.token && t < state.tokenExp - 1000) return state.token;

    try {
        const res = await fetch(TOKEN_ENDPOINT, { credentials: "include" });
        if (!res.ok) throw new Error("token_failed");
        const data = await res.json();
        state.token = data.token;
        state.tokenExp = data.expiresAt || t + 60_000;
        return state.token;
    } catch {
        return "";
    }
}

async function sendEvent(event, endpoint) {
    const token = await getToken();
    if (!token) return false;

    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-monitor-token": token,
            },
            body: JSON.stringify(event),
            keepalive: true,
        });
        return res.ok;
    } catch {
        return false;
    }
}

async function flushQueue(options) {
    if (state.sending) return;
    state.sending = true;

    const endpoint = options.endpoint || DEFAULT_ENDPOINT;
    const maxPerFlush = options.maxPerFlush || 5;

    const pending = state.queue.splice(0, maxPerFlush);
    if (!pending.length) {
        state.sending = false;
        return;
    }

    const failed = [];
    for (const event of pending) {
        // eslint-disable-next-line no-await-in-loop
        const ok = await sendEvent(event, endpoint);
        if (!ok) failed.push(event);
    }

    if (failed.length) {
        state.queue = failed.concat(state.queue);
    }

    saveQueue(state.queue);
    state.sending = false;
}

function scheduleFlush(options) {
    const t = now();
    if (t - state.lastFlush < 1000) return;
    state.lastFlush = t;
    setTimeout(() => flushQueue(options), 50);
}

function buildBaseEvent() {
    return {
        timestamp: now(),
        page: window.location?.pathname || "",
        environment: process.env.NEXT_PUBLIC_APP_ENV,
        appVersion: process.env.NEXT_PUBLIC_APP_VERSION,
        client: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
        },
    };
}

function enqueue(event, options) {
    const level = event.level || "error";
    if (!shouldSample(level, options.sampleRate)) return;
    if (!allowByRateLimit(level, options.rateLimit, options.rateWindowMs)) return;
    if (isDuplicate(event, options.dedupWindowMs)) return;

    state.queue.push(event);
    saveQueue(state.queue);
    scheduleFlush(options);
}

function captureErrorEvent(type, error, options, extra = {}) {
    const message = error?.message || safeStringify(error);
    const stack = error?.stack || "";

    enqueue(
        {
            ...buildBaseEvent(),
            type,
            level: "error",
            message,
            stack,
            ...extra,
        },
        options
    );
}

function wrapConsole(options) {
    if (state.consoleWrapped) return;
    state.originalConsole = {
        error: console.error,
        warn: console.warn,
    };
    state.consoleWrapped = true;

    console.error = (...args) => {
        try {
            enqueue(
                {
                    ...buildBaseEvent(),
                    type: "warning",
                    level: "error",
                    message: args.map(safeStringify).join(" "),
                },
                options
            );
        } catch {
            // ignore
        }
        state.originalConsole.error(...args);
    };

    console.warn = (...args) => {
        try {
            enqueue(
                {
                    ...buildBaseEvent(),
                    type: "warning",
                    level: "warn",
                    message: args.map(safeStringify).join(" "),
                },
                options
            );
        } catch {
            // ignore
        }
        state.originalConsole.warn(...args);
    };
}

function wrapFetch(options) {
    if (!window.fetch || window.fetch.__monitorWrapped || state.fetchWrapped) return;

    const originalFetch = window.fetch.bind(window);
    const wrapped = async (input, init = {}) => {
        const start = now();
        const url = typeof input === "string" ? input : input?.url;
        const method = init?.method || (typeof input !== "string" ? input?.method : "GET") || "GET";
        const bodySnippet = await getRequestBodySnippetAsync(input, init);

        if (url && String(url).includes("/api/monitor")) {
            return originalFetch(input, init);
        }

        try {
            const response = await originalFetch(input, init);
            const durationMs = now() - start;
            const status = response.status;
            const requestId = response.headers.get("x-request-id") || undefined;

            if (!response.ok) {
                enqueue(
                    {
                        ...buildBaseEvent(),
                        type: "api_error",
                        level: status >= 500 ? "error" : "warn",
                        message: `Fetch ${method} ${url} -> ${status}`,
                        request: { url, method, status, durationMs, bodySnippet },
                        correlationId: requestId,
                    },
                    options
                );
            }

            return response;
        } catch (error) {
            const durationMs = now() - start;
            enqueue(
                {
                    ...buildBaseEvent(),
                    type: "api_error",
                    level: "error",
                    message: `Fetch ${method} ${url} failed`,
                    request: { url, method, durationMs, bodySnippet },
                },
                options
            );
            throw error;
        }
    };

    wrapped.__monitorWrapped = true;
    window.fetch = wrapped;
    state.fetchWrapped = true;
}

function captureGlobalErrors(options) {
    window.addEventListener("error", (event) => {
        if (event?.message && String(event.message).includes("ChunkLoadError")) {
            enqueue(
                {
                    ...buildBaseEvent(),
                    type: "navigation",
                    level: "error",
                    message: event.message,
                },
                options
            );
            return;
        }

        captureErrorEvent("js_error", event?.error || event, options, {
            message: event?.message || event?.error?.message,
            stack: event?.error?.stack,
        });
    });

    window.addEventListener("unhandledrejection", (event) => {
        captureErrorEvent("promise_rejection", event?.reason || event, options);
    });
}

export function init(userOptions = {}) {
    if (typeof window === "undefined" || state.initialized) return;

    const options = {
        endpoint: DEFAULT_ENDPOINT,
        sampleRate: 0.2,
        rateLimit: 30,
        rateWindowMs: 60_000,
        dedupWindowMs: 30_000,
        maxPerFlush: 5,
        ...userOptions,
    };

    state.queue = loadQueue();
    saveQueue(state.queue);

    captureGlobalErrors(options);
    wrapConsole(options);
    wrapFetch(options);

    window.addEventListener("online", () => flushQueue(options));
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            flushQueue(options);
        }
    });

    state.initialized = true;
    scheduleFlush(options);
}
