import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funcionam as gravações na nuvem? | Leste",
  description: "Entenda como as gravações do Leste Câmeras são armazenadas.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funcionam as gravações na nuvem?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              As gravações do Leste Câmeras são feitas automaticamente a partir
              da detecção de movimento no ambiente e ficam armazenadas na nuvem
              conforme o plano contratado.
            </p>
            <p>
              O armazenamento pode ser de 7 ou 30 dias, sem limite por volume
              de dados.
            </p>
            <p>
              Enquanto as gravações estiverem disponíveis no aplicativo, é
              possível visualizar e baixar os vídeos.
            </p>
          </div>
          <FaqNote>
            <p>
              O acesso depende de o cliente estar ativo e adimplente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
