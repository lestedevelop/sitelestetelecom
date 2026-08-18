const familyLiveIds = [
    2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2460, 2442, 2461, 2443,
    2462, 2444, 2463, 2464, 2488, 2489, 2445, 2465, 2466, 2467, 2468, 2469,
    2490, 2491, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479,
    2480, 2492, 2493, 2481, 2482, 2483, 2484, 2485, 2486, 2512, 2513, 2487,
    2506, 2507, 2508, 2509, 2510, 2511,
];

const familyLiveVodIds = [
    2446, 2447, 2448, 2449, 2527, 2528, 2529, 2514, 2515, 2516, 2517, 2518,
    2519, 2450, 2451, 2452, 2453, 2530, 2531, 2532, 2520, 2521, 2522, 2523,
    2524, 2525,
];

const familyVodIds = [2454, 2455, 2457, 2458];

const familyExtraChannels = [
    {
        id: "family-extra-premiere",
        src: "/assets/leste-play/family/extra/premiere.svg",
        alt: "Premiere",
    },
    {
        id: "family-extra-telecine",
        src: "/assets/leste-play/cine/vod/Group 2459.svg",
        alt: "Telecine",
    },
];

function toChannelAssets(ids, folder) {
    return ids.map((id) => ({
        id,
        src: `/assets/leste-play/family/${folder}/Group ${id}.svg`,
        alt: `Canal Family ${id}`,
    }));
}

export const familyChannelSections = [
    {title: "Ao vivo", channels: toChannelAssets(familyLiveIds, "ao-vivo")},
    {title: "Ao vivo e VOD", channels: toChannelAssets(familyLiveVodIds, "ao-vivo-vod")},
    {title: "VOD", channels: toChannelAssets(familyVodIds, "vod")},
    {title: "Extra", channels: familyExtraChannels},
];
