import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Onde o Leste Câmeras está disponível? | Leste",
  description: "Cidades e perfis de clientes atendidos pelo Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Onde o Leste Câmeras está disponível?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Atualmente, o Leste Câmeras está disponível nas seguintes cidades:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Niterói</li>
              <li>Maricá</li>
            </ul>
            <p>O serviço pode ser contratado por clientes residenciais e PME.</p>
          </div>
          <FaqNote>
            <p>
              A disponibilidade pode variar conforme a rede e a viabilidade
              técnica do endereço.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
