import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Os planos incluem Wi-Fi? | Leste",
  description: "Informações sobre equipamentos com Wi-Fi nos planos da Leste.",
};

export default function WifiGratis() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Os planos incluem Wi-Fi?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Os planos podem incluir equipamentos com Wi-Fi, conforme a oferta
              contratada.
            </p>

            <p>
              Os equipamentos fornecidos são voltados para cobertura básica do
              ambiente e podem variar de acordo com o plano, podendo ser
              integrados, como ONU com Wi-Fi, ou separados, como ONU e roteador.
              As tecnologias disponíveis também podem variar, incluindo padrões
              mais avançados, como AC, AX, entre outros.
            </p>

            <p>Também há planos que não incluem equipamentos com Wi-Fi.</p>

            <p>
              Para verificar a velocidade da sua internet, o teste deve ser
              realizado com um cabo conectado diretamente à ONU.
            </p>
          </div>

          <FaqNote>
            <p>
              O equipamento disponibilizado é cedido para uso durante a vigência
              do contrato e deve ser devolvido em caso de cancelamento.
            </p>
            <p>
              Não há garantia de cobertura, alcance ou intensidade do sinal
              Wi-Fi, pois o desempenho pode ser afetado por fatores externos,
              como interferências e características do ambiente.
            </p>
            <p>
              A empresa não se responsabiliza por configurações realizadas no
              equipamento, e eventuais problemas decorrentes dessas alterações ou
              de oscilações elétricas são de responsabilidade do assinante.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
