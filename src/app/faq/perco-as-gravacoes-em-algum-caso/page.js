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
              As gravações em nuvem não são permanentes e podem ser
              perdidas dependendo da situação.
            </p>
            <p>
              Em caso de cancelamento, o acesso às imagens permanece apenas
              até a data do cancelamento.
            </p>
            <div>
              <p className="font-bold text-darkgreen">Em caso de inadimplência:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Após 15 dias, o acesso ao aplicativo é bloqueado, mas a
                  câmera continua gravando normalmente.
                </li>
                <li>
                  Após 45 dias, o acesso permanece bloqueado e a câmera deixa
                  de realizar novas gravações.
                </li>
                <li>
                  Após 75 dias, ocorre o cancelamento do serviço e a exclusão
                  das gravações armazenadas em nuvem.
                </li>
              </ul>
            </div>
            <p>
              Em situações como troca de câmera, alteração de hardware
              ou mudança de conta, todas as gravações são perdidas.
            </p>
          </div>
          <FaqNote>
            <p>
              O cliente deve baixar previamente os vídeos que deseja salvar
              enquanto ainda estiverem disponíveis no aplicativo. A Leste não
              se responsabiliza pela perda das imagens nesses casos.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
