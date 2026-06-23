import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title:
    "A Leste Telecom trabalha com IPv6? O IPv6 pode afetar o funcionamento das minhas câmeras? | Leste",
  description:
    "Informações sobre IPv6, CGNAT, câmeras, DVRs e compatibilidade com ONVIF.",
};

export default function ALesteTelecomTrabalhaComIPv6() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={
            <>
              A Leste Telecom trabalha com IPv6? O IPv6 pode afetar o
              funcionamento das minhas câmeras?
            </>
          }
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. A Leste Telecom já disponibiliza IPv6 para seus clientes. O
              IPv4 também é fornecido, porém por meio de CGNAT (Carrier Grade
              NAT).
            </p>

            <p>
              Com o esgotamento do IPv4, a utilização do IPv6 tornou-se
              necessária. No entanto, muitos equipamentos ainda dependem
              exclusivamente do IPv4, o que pode gerar limitações em alguns
              cenários.
            </p>

            <p>
              Um dos principais casos envolve sistemas de câmeras e DVRs mais
              antigos (legados), que não possuem suporte ao IPv6. Esses
              equipamentos podem apresentar dificuldades de funcionamento,
              especialmente quando dependem de acesso externo direto.
            </p>

            <p>
              Cada fabricante utilizava seus próprios padrões e protocolos. Para
              resolver problemas de compatibilidade, foi criado em 2008 o
              padrão ONVIF (Open Network Video Interface Forum), desenvolvido por
              empresas como Axis, Sony e Bosch. Esse padrão permite maior
              interoperabilidade entre dispositivos de diferentes fabricantes.
            </p>

            <p>
              Câmeras que utilizam o padrão ONVIF e operam com acesso via nuvem
              geralmente funcionam normalmente em redes com CGNAT.
            </p>

            <p>
              Sempre que possível, recomenda-se utilizar equipamentos
              compatíveis com IPv6 ou com o padrão ONVIF, para garantir melhor
              funcionamento e compatibilidade com a rede.
            </p>
          </div>

          <FaqNote>
            <p>
              O IPv4 é disponibilizado via CGNAT, que permite o compartilhamento
              de endereços IP entre múltiplos usuários durante a transição para
              o IPv6. Em alguns casos, aplicações ou dispositivos que dependem
              exclusivamente de IPv4 ou de acesso externo direto podem não
              funcionar corretamente. Informações adicionais podem ser
              consultadas em: http://www.copeltelecom.com/site/blog/conheca-o-cgnat/
              e http://ipv6.br/
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
