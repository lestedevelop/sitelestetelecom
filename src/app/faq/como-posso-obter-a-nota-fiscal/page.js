import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como posso obter a nota fiscal? | Leste",
  description: "Como posso obter a nota fiscal?",
};

export default function ComoObterANotaFiscal() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como posso obter a nota fiscal?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode emitir sua nota fiscal pela Central do Assinante.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Para acessar:</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  No site da Leste, clique em Central do Assinante
                </li>
                <li>Informe o CPF do titular</li>
                <li>
                  Use como senha os 5 primeiros dígitos do CPF + o último
                  dígito ou a senha cadastrada por você no primeiro acesso
                </li>
                <li>Acesse a opção Nota Fiscal</li>
                <li>Clique em Ver Nota Fiscal para gerar o PDF</li>
              </ol>
            </div>
          </div>

          <FaqNote>
            <p>
              Pode ser necessário liberar pop-ups no navegador para gerar o
              arquivo. Caso a nota não esteja disponível no site, é possível
              solicitar pelo atendimento, com prazo de envio de até 5 dias
              úteis.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
