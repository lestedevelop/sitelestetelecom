import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Preciso atualizar o boleto vencido? | Leste",
  description: "Informações sobre pagamento de boleto vencido.",
};

export default function AtualizacaoDeBoleto() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Preciso atualizar o boleto vencido?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Se o seu boleto venceu, na maioria dos casos você ainda pode pagar
              sem atualizar.
            </p>

            <p>Isso acontece por causa das regras de registro bancário.</p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Para pagar:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Use o mesmo boleto em qualquer banco</li>
                <li>O pagamento pode ser feito mesmo após o vencimento</li>
                <li>
                  Essa condição é válida por até 45 dias após a data de
                  vencimento
                </li>
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              Desde novembro de 2018, os boletos são registrados antes da
              emissão, permitindo o pagamento após o vencimento dentro desse
              prazo. Após 45 dias, é necessário gerar um novo boleto.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
