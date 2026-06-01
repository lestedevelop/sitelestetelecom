import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Para quem o Leste Ultra é indicado? | Leste",
  description: "Saiba para quem o Leste Ultra é indicado.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Para quem o Leste Ultra é indicado?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Leste Ultra é indicado para quem precisa de altas velocidades de
              conexão, especialmente para atividades como download e upload de
              grandes arquivos, jogos online ou transferência de dados pesados.
            </p>
            <p>
              A tecnologia utilizada é a XGS-PON, que permite velocidades
              superiores a 1 Gbps e conexão síncrona, com velocidades de download
              e upload equivalentes.
            </p>
            <p>
              A viabilidade técnica deve ser verificada caso a caso com o
              atendimento.
            </p>
          </div>
          <FaqNote>
            <p>
              O desempenho também depende dos equipamentos do cliente e da
              disponibilidade geográfica da rede.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
