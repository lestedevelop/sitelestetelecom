import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste dá suporte a IPTV ou TV Box? | Leste",
  description:
    "Informações sobre suporte a IPTV, TV Box, streaming e serviços oficiais.",
};

export default function ALesteDaSuporteAIptvOuTvBox() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste dá suporte a IPTV ou TV Box?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Leste não oferece, comercializa ou presta suporte a serviços de
              IPTV, TV Box ou aplicativos de streaming.
            </p>

            <p>
              Esses serviços utilizam servidores externos e funcionam fora da
              rede e do controle da operadora, por isso não há garantia de
              funcionamento, estabilidade ou segurança.
            </p>

            <p>
              Além disso, alguns serviços podem distribuir conteúdo sem
              autorização, o que pode configurar irregularidade ou violação de
              direitos autorais.
            </p>

            <p>
              O uso desses sistemas pode envolver riscos como instabilidade,
              interrupções, exposição a vírus, invasões ou risco de vazamento de
              dados.
            </p>

            <p>
              Plataformas oficiais como Netflix, YouTube e Amazon Prime Video
              não se enquadram como IPTV e funcionam normalmente na conexão.
            </p>

            <p>
              Para maior segurança e qualidade, recomenda-se o uso de serviços
              oficiais, licenciados e reconhecidos pelo mercado.
            </p>
          </div>

          <FaqNote>
            <p>
              A Leste não possui acesso ou controle sobre serviços de IPTV, TV
              Box ou plataformas similares, não oferecendo suporte técnico para
              esses sistemas. O uso de serviços irregulares pode acarretar
              bloqueios, apreensão de equipamentos ou outros impactos ao
              usuário.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
