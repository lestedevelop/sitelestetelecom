import GoogleMapEmbed from "@/pageComponents/faq/GoogleMapEmbed";

export default function StoreCard({ store }) {
    return (
        <section>
            <h2 className="text-5xl font-extrabold text-primary">{store.city}</h2>

            <div className="mt-6 space-y-1 text-dark">
                <p>
                    <strong>Endereço:</strong> {store.address}
                </p>

                {store.reference ? (
                    <p>
                        <strong>Referência:</strong> {store.reference}
                    </p>
                ) : null}

                {store.coords ? (
                    <p>
                        <strong>Coordenada:</strong> {store.coords}
                    </p>
                ) : null}
            </div>

            {store.hours?.length ? (
                <div className="mt-6">
                    <p className="font-bold text-dark">Horários de atendimento:</p>
                    <div className="mt-1 text-dark">
                        {store.hours.map((h) => (
                            <p key={h}>{h}</p>
                        ))}
                    </div>
                </div>
            ) : null}

            <div className="mt-8">
                <GoogleMapEmbed coords={store.coords} label={store.city} />
            </div>
        </section>
    );
}
