import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Perco as gravações em algum caso? | Leste",
  description: "Quando as gravações do Leste Câmeras podem ser perdidas.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Perco as gravações em algum caso?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              As gravações em nuvem não são permanentes e podem ser perdidas
              dependendo da situação.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Em caso de cancelamento, o acesso permanece até a data do cancelamento</li>
              <li>Após 15 dias de inadimplência, o acesso ao app é bloqueado</li>
              <li>Após 45 dias, a câmera deixa de realizar novas gravações</li>
              <li>Após 75 dias, ocorre o cancelamento e a exclusão das gravações</li>
              <li>Troca de câmera, hardware ou conta também apaga as gravações</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Baixe previamente os vídeos que deseja salvar enquanto ainda
              estiverem disponíveis no aplicativo.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
