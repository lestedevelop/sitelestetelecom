import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Por que meu vizinho tem internet e eu não? | Leste",
  description:
    "Informações sobre disponibilidade técnica e viabilidade de instalação da Leste.",
};

export default function PorQueMeuVizinhoTemInternetEEuNao() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Por que meu vizinho tem internet e eu não?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A disponibilidade do serviço pode variar mesmo em locais próximos,
              pois depende de fatores técnicos, estruturais e operacionais da
              rede.
            </p>

            <p>
              A instalação está condicionada a elementos como capacidade
              disponível, distância até os pontos de atendimento e infraestrutura
              existente na região. Por isso, mesmo em uma mesma rua ou prédio,
              pode haver diferença entre imóveis atendidos.
            </p>

            <p>
              Se houver viabilidade técnica, a instalação poderá ser realizada.
            </p>
          </div>

          <FaqNote>
            <p>
              A disponibilidade do serviço depende de fatores técnicos e
              operacionais, como infraestrutura instalada, distância até a rede
              e existência de capacidade disponível (portas livres). A ausência
              desses elementos pode impedir a instalação.
            </p>
            <p>
              O serviço é prestado em regime privado, conforme regulamentação da
              Anatel (Resolução nº 765/2023 - RGC), não se caracterizando como
              serviço público.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
