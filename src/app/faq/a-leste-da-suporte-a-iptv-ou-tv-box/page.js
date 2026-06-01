import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste dá suporte a IPTV ou TV Box? | Leste",
  description:
    "Informacoes sobre suporte a IPTV, TV Box, streaming e servicos oficiais.",
};

export default function ALesteDaSuporteAIptvOuTvBox() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste dá suporte a IPTV ou TV Box?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Leste nao oferece, comercializa ou presta suporte a servicos de
              IPTV, TV Box ou aplicativos de streaming.
            </p>

            <p>
              Esses servicos utilizam servidores externos e funcionam fora da
              rede e do controle da operadora, por isso nao ha garantia de
              funcionamento, estabilidade ou seguranca.
            </p>

            <p>
              Alem disso, alguns servicos podem distribuir conteudo sem
              autorizacao, o que pode configurar irregularidade ou violacao de
              direitos autorais.
            </p>

            <p>
              O uso desses sistemas pode envolver riscos como instabilidade,
              interrupcoes, exposicao a virus, invasoes ou risco de vazamento de
              dados.
            </p>

            <p>
              Plataformas oficiais como Netflix, YouTube e Amazon Prime Video
              nao se enquadram como IPTV e funcionam normalmente na conexao.
            </p>

            <p>
              Para maior seguranca e qualidade, recomenda-se o uso de servicos
              oficiais, licenciados e reconhecidos pelo mercado.
            </p>
          </div>

          <FaqNote>
            <p>
              A Leste nao possui acesso ou controle sobre servicos de IPTV, TV
              Box ou plataformas similares, nao oferecendo suporte tecnico para
              esses sistemas. O uso de servicos irregulares pode acarretar
              bloqueios, apreensao de equipamentos ou outros impactos ao
              usuario.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
