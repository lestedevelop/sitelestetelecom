import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso transferir minha internet para outro endereço? | Leste",
  description:
    "Informações sobre transferência de internet da Leste para outro endereço.",
};

export default function MudeiDeEnderecoPossoTransferir() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={<>Posso transferir minha internet para outro endereço?</>}
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim, você pode solicitar a transferência do seu serviço para um
              novo endereço.
            </p>

            <p>
              A transferência está disponível quando há cobertura de rede no
              local e disponibilidade de conexão. Para verificar essas condições
              e solicitar o serviço, entre em contato com a central de
              atendimento pelo telefone ou WhatsApp{" "}
              <strong className="font-bold text-darkgreen">
                (021) 2020-1300
              </strong>
              .
            </p>
          </div>

          <FaqNote>
            <p>
              A transferência depende da cobertura de rede FTTH e da
              disponibilidade técnica no novo endereço. A instalação no endereço
              anterior é encerrada e pode haver cobrança de nova instalação,
              conforme as condições do contrato.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
