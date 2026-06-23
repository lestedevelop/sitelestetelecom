import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como testar a velocidade da minha internet? | Leste",
  description:
    "Orientações para realizar um teste de velocidade correto e interpretar o resultado.",
};

export default function TesteDeVelocidadeFaq() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como testar a velocidade da minha internet?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Para realizar um teste de velocidade correto, siga estas
              orientações:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Conecte o computador diretamente à ONU com cabo de rede e não
                utilize Wi-Fi
              </li>
              <li>Acesse o site http://www.minhaconexao.com.br/</li>
              <li>Acesse o site https://beta.simet.nic.br</li>
              <li>Verifique se o servidor da Leste Telecom está selecionado</li>
              <li>Execute o teste e confirá o resultado</li>
            </ul>

            <p>Se necessário, antes de repetir o teste:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Reinicie a ONU e o roteador, ou o equipamento em uso
              </li>
              <li>Limpe o histórico do navegador</li>
              <li>Teste o acesso a diferentes sites</li>
            </ul>

            <p>
              Se a velocidade não ultrapassar 100 Mbps, verifique se sua rede é
              compatível com gigabit:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Placa de rede do computador</li>
              <li>Cabos utilizados</li>
              <li>Switches ou outros equipamentos intermediários</li>
            </ul>

            <p>
              Qualquer equipamento limitado a 100 Mbps pode reduzir a velocidade.
              Os equipamentos fornecidos pela Leste possuem portas gigabit, ou
              seja, são compatíveis com até 1 Gbps de velocidade.
            </p>

            <p>
              Para velocidades acima de 800 Mbps, alguns navegadores podem
              limitar o resultado em determinados sites. Nesses casos, utilize o
              aplicativo do Speedtest (Ookla) para Windows.
            </p>

            <p>
              Se o problema continuar, entre em contato com a central de
              atendimento pelo telefone ou WhatsApp (021) 2020-1300 ou por e-mail
              sac@lestetelecom.com.br.
            </p>
          </div>

          <FaqNote>
            <p>
              Em conexões com ONU em modo bridge, pode ser necessário realizar
              configurações adicionais no dispositivo ou solicitar a liberação de
              MAC para que o teste funcione corretamente. Em caso de dúvida,
              entre em contato com a central de atendimento.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
