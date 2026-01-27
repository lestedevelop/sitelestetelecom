const buckets = new Map();

export function checkRateLimit({ key, limit = 60, windowMs = 60_000 }) {
    const now = Date.now();
    const bucket = buckets.get(key) || { count: 0, resetAt: now + windowMs };

    if (now > bucket.resetAt) {
        bucket.count = 0;
        bucket.resetAt = now + windowMs;
    }

    bucket.count += 1;
    buckets.set(key, bucket);

    const remaining = Math.max(0, limit - bucket.count);
    const ok = bucket.count <= limit;

    return {
        ok,
        remaining,
        resetAt: bucket.resetAt,
    };
}
