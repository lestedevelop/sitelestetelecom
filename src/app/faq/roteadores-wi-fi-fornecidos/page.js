import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso escolher a marca do roteador ou da ONU? | Leste",
  description:
    "Informações sobre escolha de marca, modelo e tecnologia dos equipamentos fornecidos pela Leste.",
};

export default function RoteadoresFornecidos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso escolher a marca do roteador ou da ONU?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Não. A escolha dos equipamentos é feita pela Leste.</p>

            <p>
              Os equipamentos utilizados são definidos de acordo com a
              disponibilidade em estoque, o padrão técnico e o plano contratado.
            </p>

            <p>
              Os planos podem incluir tecnologias específicas, como Wi-Fi AC ou
              AX. Nesse caso, o equipamento fornecido será compatível com a
              tecnologia prevista na oferta, podendo variar em marca, modelo e
              características físicas.
            </p>

            <p>
              Nos demais casos, os equipamentos são voltados para uso básico.
            </p>
          </div>

          <FaqNote>
            <p>
              Todos os equipamentos fornecidos são homologados pela empresa,
              porém não há garantia de marca, modelo ou série, que podem variar
              conforme disponibilidade, fornecedores e cadeia de suprimentos.
            </p>
            <p>
              A Leste não vincula suas ofertas a marcas específicas, garantindo
              apenas o padrão técnico e, quando aplicável, a tecnologia prevista
              no plano contratado.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
