import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Estou sem internet, o que fazer? | Leste",
  description:
    "Orientacoes basicas quando a internet nao funciona ou a ONU apresenta luz vermelha.",
};

export default function SemInternet() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Estou sem internet, o que fazer?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Se sua internet não estiver funcionando ou a ONU apresentar luz
              vermelha piscando, você pode realizar algumas verificações antes
              de entrar em contato com o atendimento:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Reinicie a ONU e o roteador, desligando da tomada, aguardando
                alguns segundos e ligando novamente
              </li>
              <li>Verifique se todos os cabos estão conectados corretamente</li>
              <li>Teste a conexão em outro dispositivo, se possível</li>
            </ul>

            <p>
              Se o problema continuar, entre em contato com a central de
              atendimento pelo telefone ou WhatsApp (021) 2020-1300.
            </p>
          </div>

          <FaqNote>
            <p>
              O atendimento pode orientar verificações adicionais quando a
              falha persistir após a checagem básica dos equipamentos.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
