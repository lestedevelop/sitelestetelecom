import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste oferece planos empresariais (síncronos)? | Leste",
  description:
    "Informações sobre planos residenciais e sobre a oferta de planos síncronos pela unidade Corporate.",
};

export default function ALesteOferecePlanosEmpresariaisSincronos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste oferece planos empresariais (síncronos)?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Os planos disponiveis no site sao voltados para uso residencial e
              possuem velocidades diferentes de download e upload
              (assimetricas).
            </p>

            <p>
              Os planos residenciais nao sao indicados para servidores ou
              aplicacoes criticas e possuem restricoes, como bloqueio de portas
              de entrada abaixo de 1024.
            </p>

            <p>
              Para esse tipo de uso empresarial, a Leste oferece planos
              sincronos por meio da unidade Corporate.
            </p>
          </div>

          <FaqNote>
            <p>
              Para mais detalhes sobre as condicoes do servico, consulte o
              contrato de prestacao disponivel no site.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
