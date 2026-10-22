import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Onde o Leste UP está disponível? | Leste",
  description: "Disponibilidade do Leste UP.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Onde o Leste UP está disponível?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>O Leste UP está disponível para clientes residenciais com Leste Fibra ativo nas seguintes cidades:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Niterói</li>
              <li>Maricá</li>
              <li>Itaboraí</li>
              <li>São Gonçalo</li>
              <li>Rio Bonito</li>
              <li>Tanguá</li>
              <li>Magé</li>
              <li>Guapimirim</li>
            </ul>
          </div>
          <FaqNote>
            <p>A contratação está sujeita à consulta de disponibilidade e à viabilidade técnica do endereço, exceto em áreas restritas.</p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
