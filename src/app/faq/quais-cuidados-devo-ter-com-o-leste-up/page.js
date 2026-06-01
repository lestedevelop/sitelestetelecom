import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Quais cuidados devo ter com o Leste UP? | Leste",
  description: "Cuidados e recomendações de uso do Leste UP.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Quais cuidados devo ter com o Leste UP?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Para garantir o funcionamento correto e a segurança do equipamento:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Não utilize em locais fechados ou sem ventilação</li>
              <li>Evite contato com materiais que dificultem a dissipação de calor</li>
              <li>Não exponha ao sol, calor excessivo ou umidade</li>
              <li>Não coloque próximo a materiais inflamáveis</li>
              <li>Não utilize se apresentar avarias</li>
              <li>Não tente realizar manutenção ou substituir a bateria</li>
            </ul>
            <p>Recomendações de uso:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Utilize fonte adequada de 12V/2A</li>
              <li>Não exceda o consumo máximo de 1,5A</li>
              <li>Carregue completamente antes do primeiro uso</li>
              <li>Mantenha a carga regular pelo menos uma vez por mês</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Utilize o Leste UP apenas com equipamentos de rede da Leste.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
