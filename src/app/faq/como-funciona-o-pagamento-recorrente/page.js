import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona o pagamento recorrente? | Leste",
  description:
    "Informações sobre pagamento recorrente com cartão de crédito na Central do Assinante.",
};

export default function ComoFuncionaOPagamentoRecorrente() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona o pagamento recorrente?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode cadastrar um cartão de crédito na Central do Assinante
              para pagar suas mensalidades automaticamente.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Existem duas formas de ativar o pagamento recorrente:
              </h2>

              <div className="mt-4 space-y-4">
                <section>
                  <h3 className="font-semibold text-darkgreen">
                    1. Ao pagar uma fatura em aberto
                  </h3>
                  <p className="mt-2">
                    Se você já possui uma fatura em aberto, pode ativar o
                    pagamento recorrente no momento do pagamento.
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Acesse: https://portal.lestetelecom.com.br</li>
                    <li>Selecione a fatura desejada</li>
                    <li>Clique em Cartão</li>
                    <li>Preencha os dados do cartão</li>
                    <li>
                      Na tela de confirmação, mantenha a opção de pagamento
                      automático selecionada
                    </li>
                  </ul>
                  <p className="mt-3">
                    Nessa modalidade, a fatura atual será paga no cartão, e as
                    próximas mensalidades serão cobradas automaticamente, em
                    parcela única, no vencimento.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-darkgreen">
                    2. Sem fatura em aberto
                  </h3>
                  <p className="mt-2">
                    Se você não possui faturas em aberto, pode cadastrar o
                    cartão como forma de pagamento padrão.
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Acesse: https://portal.lestetelecom.com.br</li>
                    <li>Clique em “Pagamento automático”</li>
                    <li>Selecione “Cartão de crédito”</li>
                    <li>Preencha os dados do cartão</li>
                    <li>Marque a opção de pagamento recorrente</li>
                    <li>Salve o cartão</li>
                  </ul>
                  <p className="mt-3">
                    Após o cadastro, o pagamento recorrente ficará ativo para
                    as próximas mensalidades.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-darkgreen">Para desativar</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Acesse a opção “Forma de Pagamento” na Central do Assinante</li>
                    <li>Selecione a opção Boleto</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <FaqNote>
            <p>
              Para que o pagamento recorrente seja aplicado a uma fatura, o
              cadastro do cartão deve ser realizado com antecedência mínima de
              24 horas da data de vencimento. Caso contrário, a fatura do dia
              não será incluída no recorrente.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
