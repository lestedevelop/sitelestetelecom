import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como conferir se os cabos estão conectados corretamente? | Leste",
  description:
    "Orientações para verificar se os cabos estão bem conectados aos equipamentos.",
};

export default function ComoConferirCabos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como conferir se os cabos estão conectados corretamente?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Utilize o mapa de conexões como referência e verifique se todos os
              cabos estão corretamente conectados aos equipamentos.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Confira se os cabos estão bem encaixados</li>
              <li>Verifique se não há cabos soltos ou desconectados</li>
            </ul>

            <p>
              Se o problema continuar, entre em contato com a central de
              atendimento.
            </p>
          </div>

          <FaqNote>
            <p>
              Conferir os cabos é uma das primeiras etapas de diagnóstico em
              casos de instabilidade ou ausência de conexão.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
