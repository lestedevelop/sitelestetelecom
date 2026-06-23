import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Alguns sites não abrem, o que faço? | Leste",
  description:
    "Informações sobre verificacoes quando alguns sites não abrem e orientações de suporte.",
};

export default function AlgunsSitesNaoAbremOQueFaco() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Alguns sites não abrem, o que faço?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Se alguns sites não estiverem abrindo, você pode realizar algumas
              verificações antes de entrar em contato com o atendimento.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Reinicie a ONU e o roteador, ou o equipamento em uso, desligando
                da tomada, aguardando alguns segundos e ligando novamente
              </li>
              <li>
                Tente acessar o site por outro navegador ou utilizando dados
                móveis
              </li>
              <li>
                Teste a conexão em outro dispositivo, como celular, tablet ou
                computador
              </li>
            </ul>

            <p>
              Se o problema continuar, entre em contato com a central de
              atendimento e informe quais sites não estão acessando.
            </p>
          </div>

          <FaqNote>
            <p>
              Verificar navegador, dispositivo e equipamentos ajuda a isolar se
              a falha está na rede, no site ou no aparelho utilizado.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
