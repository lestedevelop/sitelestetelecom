const DEVICE_FALLBACKS = {
    mobile: ["mobile", "default", "desktop"],
    desktop: ["desktop", "default", "tablet"],
    tablet: ["tablet", "desktop", "default"],
};

export function getCurrentDevice() {
    if (typeof window === "undefined") return "desktop";
    if (window.matchMedia("(max-width: 767px)").matches) return "mobile";
    if (window.matchMedia("(max-width: 1023px)").matches) return "tablet";
    return "desktop";
}

export function isAdvertActive(advert, now = new Date()) {
    if (!advert) return false;

    const showTestAdverts =
        process.env.NODE_ENV !== "production" ||
        process.env.NEXT_PUBLIC_SHOW_TEST_BANNERS === "true";
    if (advert.flags?.isTest && !showTestAdverts) return false;

    const startsAt = advert?.schedule?.startsAt;
    const endsAt = advert?.schedule?.endsAt;
    if (startsAt && new Date(startsAt) > now) return false;
    if (endsAt && new Date(endsAt) < now) return false;
    return true;
}

export function selectSectionAdverts(section, device, now = new Date()) {
    if (!section?.devices) return [];

    const fallbacks = DEVICE_FALLBACKS[device] || DEVICE_FALLBACKS.desktop;
    for (const deviceKey of fallbacks) {
        const adverts = (section.devices[deviceKey] || [])
            .filter((advert) => isAdvertActive(advert, now))
            .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
        if (adverts.length) return adverts;
    }
    return [];
}

export function findHomeSection(home, key) {
    return home?.sections?.find((section) => section.key === key) || null;
}
