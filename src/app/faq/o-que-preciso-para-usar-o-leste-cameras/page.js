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
              <li>Estar com o cadastro e a conta em dia</li>
              <li>Ter conexão Wi-Fi estável no local (seja fibra da Leste ou conexão de outra operadora na modalidade avulsa)</li>
              <li>Ponto de energia elétrica adequado a até 1,5 metro do local de instalação da câmera</li>
              <li>Utilizar o aplicativo compatível com Android ou iOS</li>
            </ul>
            <p>
              O serviço opera na rede Leste e também com outras operadoras (modalidade avulsa). Na contratação avulsa, a Leste não garante a estabilidade de conexões de terceiros, e o suporte presencial para troca ou testes de equipamentos se dá no modelo balcão em nossas lojas físicas.
            </p>
          </div>
          <FaqNote>
            <p>
              O acesso às gravações e transmissões depende do serviço ativo e regular, podendo ser suspenso em caso de inadimplência. Não é permitido o uso de cartão de memória próprio na câmera, sob pena de perda de garantia e cobrança de custos de substituição.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
