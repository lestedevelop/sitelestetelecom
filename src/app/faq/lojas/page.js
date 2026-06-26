import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Onde ficam as lojas da Leste? | Leste",
  description: "Endereços e horários das lojas físicas da Leste Telecom.",
};

const stores = [
  {
    city: "Maricá",
    address:
      "Av. Vereador Francisco Sabino da Costa, 119 - Loja 5 - Centro",
    reference: "Mesmo prédio da Casa & Vídeo",
    hours: "Segunda a sexta, das 9h às 18h | Sábado, das 9h às 13h",
  },
  {
    city: "Magé (Centro)",
    address: "Praça Nilo Peçanha, 45 - Loja 211 - Centro",
    reference: "Shopping da praça",
    hours: "Segunda a sexta, das 9h às 18h | Sábado, das 9h às 13h",
  },
  {
    city: "Rio Bonito",
    address: "Av. Sete de Maio, 50 - Loja 06 - Centro",
    reference: "Edifício Henry Ford",
    hours:
      "Segunda a sexta, das 9h às 18h (almoço das 13h às 14h) | Sábado, das 9h às 13h",
  },
  {
    city: "Itaboraí",
    address: "Rua Acácio Campos dos Santos, 100 - Centro",
    reference: "Rua atrás da Academia Panobianco",
    hours: "Segunda a sexta, das 9h às 18h | Sábado, das 9h às 13h",
  },
  {
    city: "Niterói (Stand)",
    address: "Rua Quinze de Novembro, 8 - Centro",
    reference: "Shopping Plaza Niterói - Piso L3",
    hours: "Segunda a sábado, das 10h às 22h | Domingo, das 13h às 21h",
  },
];

export default function LojasPage() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Onde ficam as lojas da Leste?</>} />

        <article className="mt-10 max-w-5xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <p className="text-base leading-7 text-dark md:text-lg md:leading-8">
            A Leste possui lojas físicas para atendimento presencial nas cidades
            abaixo:
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {stores.map((store) => (
              <section
                key={store.city}
                className="rounded-xl border border-graylighter bg-light px-5 py-5"
              >
                <h2 className="text-2xl font-bold text-primary">
                  {store.city}
                </h2>

                <div className="mt-4 space-y-3 text-base leading-7 text-dark">
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

                {store.note ? (
                  <FaqNote>
                    <p>{store.note}</p>
                  </FaqNote>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
