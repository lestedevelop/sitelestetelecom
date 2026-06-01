import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que é o Leste Câmeras? | Leste",
  description: "Entenda o serviço de automonitoramento Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que é o Leste Câmeras?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Leste Câmeras é uma solução de automonitoramento exclusiva para
              clientes Leste, com câmeras Wi-Fi inteligentes e gravação em nuvem.
            </p>
            <p>
              O serviço permite acompanhar imagens em tempo real pelo aplicativo,
              trazendo mais praticidade e segurança para o dia a dia.
            </p>
            <p>
              O acesso às imagens é individual e protegido por criptografia,
              sendo possível visualizar apenas pelo aplicativo vinculado à sua
              conta.
            </p>
          </div>
          <FaqNote>
            <p>
              O acesso às imagens depende de serviço ativo e regular na conta do
              cliente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
