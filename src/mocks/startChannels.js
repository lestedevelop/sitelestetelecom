function channel(id, folder, name) {
    return {
        id: `start-${id}`,
        src: `/assets/leste-play/cine/${folder}/Group ${id}.svg`,
        alt: name,
    };
}

export const startChannelSections = [
    {
        title: "Ao vivo",
        channels: [
            channel(2434, "ao-vivo", "TV Globo"),
            channel(2435, "ao-vivo", "SBT"),
            channel(2436, "ao-vivo", "RedeTV"),
            channel(2437, "ao-vivo", "Record TV"),
            channel(2438, "ao-vivo", "Band"),
            channel(2439, "ao-vivo", "Rede Vida"),
            channel(2440, "ao-vivo", "GE TV"),
            channel(2441, "ao-vivo", "Canção Nova"),
            channel(2442, "ao-vivo", "TV Brasil"),
            channel(2443, "ao-vivo", "TV Gazeta"),
            channel(2444, "ao-vivo", "Futura"),
            channel(2445, "ao-vivo", "TV Aparecida"),
        ],
    },
    {
        title: "Ao vivo e VOD",
        channels: [
            channel(2452, "ao-vivo-vod", "Desimpedidos"),
            channel(2463, "ao-vivo-vod", "Será"),
            channel(2450, "ao-vivo-vod", "Canal do Artesanato"),
            channel(2451, "ao-vivo-vod", "Good Game"),
            channel(2453, "ao-vivo-vod", "FitDance"),
            channel(2465, "ao-vivo-vod", "WHE Play Plus"),
            channel(2466, "ao-vivo-vod", "Manual do Mundo"),
            channel(2464, "ao-vivo-vod", "Acelerados"),
        ],
    },
    {
        title: "VOD",
        channels: [
            channel(2454, "vod", "Itaú Cultural Play"),
            channel(2455, "vod", "Xpeed School"),
            channel(2456, "vod", "CNN Brasil"),
            channel(2457, "vod", "Edye"),
            channel(2458, "vod", "Universal Plus"),
        ],
    },
];
