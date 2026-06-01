import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Desligar e ligar os equipamentos pode resolver problemas de conexão? | Leste",
  description:
    "Orientacoes sobre reiniciar ONU e roteador quando a conexao apresenta instabilidade.",
};

export default function DesligarEligarPodeResolve() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={<>Desligar e ligar os equipamentos pode resolver problemas de conexão?</>}
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Reiniciar a ONU e o roteador pode resolver falhas temporárias
              causadas por oscilações na rede elétrica.
            </p>

            <p>
              Essas oscilações podem fazer com que os equipamentos travem ou
              apresentem instabilidade, mesmo sem sinais visíveis. Também é
              recomendado reiniciar os equipamentos periodicamente, para evitar
              sobrecarga ou superaquecimento.
            </p>

            <p>
              Para reduzir esse tipo de problema, é recomendado utilizar um
              no-break para manter os equipamentos protegidos.
            </p>
          </div>

          <FaqNote>
            <p>
              Reiniciar os equipamentos é uma etapa básica de diagnóstico e pode
              ajudar em casos de travamento ou instabilidade momentânea.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
