import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que preciso para usar o Leste Câmeras? | Leste",
  description: "Requisitos para utilizar o serviço Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que preciso para usar o Leste Câmeras?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Para utilizar o Leste Câmeras, é necessário:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Ser cliente ativo da Leste</li>
              <li>Estar com a conta em dia</li>
              <li>Ter conexão ativa via fibra da Leste</li>
              <li>Utilizar o aplicativo compatível com Android ou iOS</li>
            </ul>
            <p>
              O serviço não funciona com outras operadoras e pode ser bloqueado
              em caso de inadimplência ou cancelamento.
            </p>
          </div>
          <FaqNote>
            <p>
              O acesso às gravações e transmissões depende do serviço ativo e
              regular.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
