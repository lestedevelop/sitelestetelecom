const cineLiveIds = [2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445];

const cineLiveVodIds = [
    2446, 2447, 2448, 2449, 2461, 2462, 2463,
    2450, 2451, 2452, 2453, 2464, 2465, 2466,
];

const cineVodIds = [2454, 2455, 2456, 2457, 2458, 2460];

function toChannelAssets(ids, folder) {
    return ids.map((id) => ({
        id,
        src: `/assets/leste-play/cine/${folder}/Group ${id}.svg`,
        alt: `Canal Cine + HBO ${id}`,
    }));
}

export const cineChannelSections = [
    {title: "Ao vivo", channels: toChannelAssets(cineLiveIds, "ao-vivo")},
    {title: "Ao vivo e VOD", channels: toChannelAssets(cineLiveVodIds, "ao-vivo-vod")},
    {title: "VOD", channels: toChannelAssets(cineVodIds, "vod")},
];
