export default function GoogleMapEmbed({ coords, label = "Mapa" }) {
    if (!coords) {
        return (
            <div className="rounded-xl border border-graylighter bg-white p-6 text-graylight">
                Mapa indisponível
            </div>
        );
    }

    const q = encodeURIComponent(`${coords} (${label})`);
    const src = `https://www.google.com/maps?q=${q}&z=16&output=embed`;

    return (
        <div className="overflow-hidden rounded-xl border border-graylighter bg-white">
            <div className="relative aspect-[16/6] w-full md:aspect-[16/5]">
                <iframe
                    title={`Mapa - ${label}`}
                    src={src}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                />
            </div>
        </div>
    );
}
