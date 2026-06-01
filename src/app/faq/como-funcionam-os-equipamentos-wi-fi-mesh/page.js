import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funcionam os equipamentos Wi-Fi Mesh? | Leste",
  description:
    "Entenda como o Wi-Fi Mesh melhora a cobertura e a estabilidade da conexão.",
};

export default function ComoFuncionamOsEquipamentosWiFiMesh() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funcionam os equipamentos Wi-Fi Mesh?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Wi-Fi Mesh é uma tecnologia que melhora a cobertura da internet
              ao utilizar múltiplos pontos distribuídos no ambiente, formando
              uma única rede integrada.
            </p>

            <p>
              Um equipamento principal recebe o sinal da internet, enquanto os
              demais pontos Mesh distribuem esse sinal automaticamente pelos
              ambientes, garantindo uma conexão mais estável e com melhor
              alcance, sem necessidade de troca manual de rede.
            </p>
          </div>

          <FaqNote>
            <p>
              O serviço de Wi-Fi Mesh está disponível apenas para clientes do
              plano 1 Giga com Mesh e não pode ser contratado separadamente. A
              Leste fornece 1 ponto Mesh por plano, conforme necessidade técnica
              e disponibilidade. Os equipamentos (marca e modelo) são definidos
              pela empresa e podem variar. A utilização ocorre mediante Termo de
              Entrega, com devolução obrigatória ao final do contrato.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
