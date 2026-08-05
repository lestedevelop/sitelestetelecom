const sportsLiveIds = [
    2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2460, 2442, 2461, 2443,
    2462, 2444, 2463, 2464, 2488, 2489, 2445, 2465, 2466, 2467, 2468, 2470,
    2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2492, 2493,
    2469, 2490, 2491, 2481, 2482, 2483, 2484, 2485, 2486, 2487,
];

const sportsLiveVodIds = [
    2446, 2447, 2448, 2449, 2494, 2495, 2496, 2497, 2498, 2499,
    2450, 2451, 2452, 2453, 2500, 2501, 2502, 2503, 2504, 2505,
];

const sportsVodIds = [2454, 2455, 2457, 2458];

function toChannelAssets(ids, folder) {
    return ids.map((id) => ({
        id,
        src: `/assets/leste-play/sports/${folder}/Group ${id}.svg`,
        alt: `Canal Sports ${id}`,
    }));
}

export const sportsChannelSections = [
    {title: "Ao vivo", channels: toChannelAssets(sportsLiveIds, "ao-vivo")},
    {title: "Ao vivo e VOD", channels: toChannelAssets(sportsLiveVodIds, "ao-vivo-vod")},
    {title: "VOD", channels: toChannelAssets(sportsVodIds, "vod")},
];
