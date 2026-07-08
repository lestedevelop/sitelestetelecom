import { ExternalLink, MapPin } from "lucide-react";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import StoresGoogleMap from "@/pageComponents/faq/StoresGoogleMap";

export const metadata = {
  title: "Onde ficam as lojas da Leste? | Leste",
  description: "Endereços e horários das lojas físicas da Leste Telecom.",
};

const stores = [
  {
    city: "Maricá",
    address: "Av. Vereador Francisco Sabino da Costa, 119 - Loja 5 - Centro",
    reference: "Mesmo prédio da Casa & Vídeo",
    hours: "Segunda a sexta, das 9h às 18h | Sábado, das 9h às 13h",
    mapUrl: "https://maps.app.goo.gl/TXB3865eQMBNxn388",
    coords: { lat: -22.916398517948625, lng: -42.81955018650737 },
  },
  {
    city: "Magé (Centro)",
    address: "Praça Nilo Peçanha, 45 - Loja 211 - Centro",
    reference: "Shopping da praça",
    hours: "Segunda a sexta, das 9h às 18h | Sábado, das 9h às 13h",
    mapUrl: "https://maps.app.goo.gl/U6HiCAkXNWCGyy4P8",
    coords: { lat: -22.65644889009953, lng: -43.039325134387404 },
  },
  {
    city: "Rio Bonito",
    address: "Av. Sete de Maio, 50 - Loja 06 - Centro",
    reference: "Edifício Henry Ford",
    hours:
      "Segunda a sexta, das 9h às 18h (almoço das 13h às 14h) | Sábado, das 9h às 13h",
    mapUrl: "https://maps.app.goo.gl/2tuDV3g5TFrjJs2YA",
    coords: { lat: -22.71218662811912, lng: -42.623539361372664 },
  },
  {
    city: "Itaboraí",
    address: "Rua Acácio Campos dos Santos, 100 - Centro",
    reference: "Rua atrás da Academia Panobianco",
    hours: "Segunda a sexta, das 9h às 18h | Sábado, das 9h às 13h",
    mapUrl: "https://maps.app.goo.gl/hev1Rn1xVAgw2eXe8",
    coords: { lat: -22.749253869689074, lng: -42.86119624973058 },
  },
  {
    city: "Niterói (Stand)",
    address: "Rua Quinze de Novembro, 8 - Centro",
    reference: "Shopping Plaza Niterói - Piso L3",
    hours: "Segunda a sábado, das 10h às 22h | Domingo, das 13h às 21h",
    mapUrl: "https://maps.app.goo.gl/KsDhyKxkX3eNGue5A",
    coords: { lat: -22.8965652, lng: -43.124045217193704 },
  },
];

export default function LojasPage() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Onde ficam as lojas da Leste?</>} />

        <article className="mt-10 max-w-6xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <p className="break-words text-base leading-7 text-dark md:text-lg md:leading-8">
            A Leste possui lojas físicas para atendimento presencial nas cidades abaixo:
          </p>

          <StoresGoogleMap />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {stores.map((store) => (
              <section
                key={store.city}
                className="overflow-hidden rounded-xl border border-graylighter bg-light"
              >
                <div className="px-5 py-5">
                  <h2 className="flex min-w-0 items-start gap-2 break-words text-2xl font-bold text-primary">
                    <MapPin className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className="min-w-0">{store.city}</span>
                  </h2>

                  <div className="mt-4 space-y-3 break-words text-base leading-7 text-dark">
                    <p>
                      <strong className="font-bold text-darkgreen">
                        Endereço:
                      </strong>{" "}
                      {store.address}
                    </p>
                    <p>
                      <strong className="font-bold text-darkgreen">
                        Referência:
                      </strong>{" "}
                      {store.reference}
                    </p>
                    <p>
                      <strong className="font-bold text-darkgreen">
                        Horário:
                      </strong>{" "}
                      {store.hours}
                    </p>
                  </div>

                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full bg-darkgreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-darkgreen/85"
                  >
                    <span className="min-w-0 break-words">Abrir no Google Maps</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>

                  {store.note ? (
                    <FaqNote>
                      <p>{store.note}</p>
                    </FaqNote>
                  ) : null}
                </div>

              </section>
            ))}
          </div>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
