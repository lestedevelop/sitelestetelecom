import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Onde o Leste Ultra está disponível? | Leste",
  description: "Cidades e disponibilidade do Leste Ultra.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Onde o Leste Ultra está disponível?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Atualmente, o Leste Ultra está disponível nas cidades:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Niterói</li>
              <li>Maricá</li>
            </ul>
            <p>
              A disponibilidade pode variar por bairro e área de cobertura.
            </p>
          </div>
          <FaqNote>
            <p>Consulte o atendimento para verificar a viabilidade no seu endereço.</p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
