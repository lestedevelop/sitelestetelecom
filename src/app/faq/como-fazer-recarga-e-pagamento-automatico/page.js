import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como fazer recarga e pagamento automático? | Leste",
  description: "Recargas e pagamento automático no Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como fazer recarga e pagamento automático?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              As recargas podem ser realizadas pelo aplicativo Leste Móvel,
              permitindo ativar ou renovar o plano sempre que necessário.
            </p>
            <p>
              Também é possível cadastrar um cartão de crédito para pagamento
              automático (recorrente), facilitando a renovação do plano sem a
              necessidade de recargas manuais.
            </p>
          </div>
          <FaqNote>
            <p>
              A recarga adicional só pode ser realizada enquanto o plano estiver
              ativo.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
