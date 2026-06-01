import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso alterar o e-mail da conta? | Leste",
  description: "Orientação sobre alteração do e-mail cadastrado no Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso alterar o e-mail da conta?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Não recomendamos alterar o e-mail cadastrado, pois isso pode causar
              perda de acesso ou inconsistências na conta.
            </p>
          </div>
          <FaqNote>
            <p>
              Se houver necessidade de atualização cadastral, entre em contato com
              a central de atendimento.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
