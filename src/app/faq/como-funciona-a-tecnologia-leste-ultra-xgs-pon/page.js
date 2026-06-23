import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a tecnologia Leste Ultra (XGS-PON)? | Leste",
  description:
    "Informações sobre cobertura, instalação, rede interna e condições de uso da tecnologia Leste Ultra (XGS-PON).",
};

export default function ComoFuncionaATecnologiaLesteUltraXGSPON() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a tecnologia Leste Ultra (XGS-PON)?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A tecnologia Leste Ultra (XGS-PON) está em fase piloto e possui
              disponibilidade limitada, sendo liberada apenas após análise
              técnica de viabilidade no endereço.
            </p>

            <p>
              Atualmente, a cobertura está disponível apenas em algumas Áreas de
              Niterói-RJ e Maricá-RJ, estando sujeita a limitacoes técnicas e
              de infraestrutura.
            </p>

            <p>
              A contratação exige pre-cadastro e validacao no local, não
              havendo garantia de instalação até a aprovacao final. Mesmo após o
              pedido, podem existir limitacoes técnicas que impecam a ativação
              do serviço.
            </p>

            <p>
              O serviço e voltado para uso profissional ou entusiasta e exige
              estrutura adequada. A rede interna, a distribuicao da conexão e os
              equipamentos utilizados no imovel são de responsabilidade do
              cliente.
            </p>

            <p>
              O plano e fornecido, em geral, sem roteador Wi-Fi, com entrega de
              ONU com saida de alta capacidade (10Gbps). A rede interna deve
              suportar velocidades como 2.5G, 5G, 7.5G ou 10G, nos padrões
              ethernet correspondentes.
            </p>

            <p>
              O desempenho depende diretamente dos equipamentos utilizados. A
              validacao da velocidade e feita com equipamentos profissionais da
              Leste, podendo haver diferencas em testes realizados com
              equipamentos proprios.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Cabos recomendados
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Cat 5: até 100 Mb/s (sem blindagem)</li>
                <li>Cat 5e: até 1 Gb/s (sem blindagem)</li>
                <li>Cat 6: até 10 Gb/s (sem blindagem)</li>
                <li>Cat 6a: até 10 Gb/s (com blindagem)</li>
                <li>Cat 7: até 10 Gb/s (com blindagem)</li>
                <li>Cat 8: até 40 Gb/s (com blindagem)</li>
              </ul>
            </div>

            <p>
              Blindagem e a protecao aplicada ao cabo para reduzir interferencias
              externas, por meio de malha metalica ou folha laminada. Cabos Cat
              7 e Cat 8 possuem blindagem mais robusta, oferecendo maior
              resistencia a ruidos e melhor desempenho, inclusive em maiores
              distancias.
            </p>

            <p>
              A instalação possui custo, que pode variar conforme o plano, o
              tipo de rede e as condições do endereço. Planos com roteador Wi-Fi
              podem ter valores diferentes.
            </p>

            <p>
              Todos os planos são de uso individual, sendo proibida a divisao ou
              revenda do serviço entre pessoas ou enderecos distintos.
            </p>

            <p>
              A garantia de banda segue os limites legais e contratuais.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Valores de referencia para reposição
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Cordao de fibra: R$ 65,00</li>
                <li>Fonte de alimentacao: R$ 100,00</li>
                <li>Patch cord: R$ 50,00</li>
                <li>ONU XGS-PON: R$ 1.000,00</li>
                <li>ONT XGS-PON: R$ 1.500,00</li>
                <li>Repetidor Mesh: R$ 1.000,00</li>
                <li>PTO: R$ 50,00</li>
              </ul>
            </div>

            <p>
              Mais detalhes:
              {" "}
              <a
                className="text-primary underline underline-offset-2"
                href="https://www.lestetelecom.com.br/faq-suporte/xgs-pon-leste"
                target="_blank"
                rel="noreferrer"
              >
                https://www.lestetelecom.com.br/faq-suporte/xgs-pon-leste
              </a>
            </p>
          </div>

          <FaqNote>
            <p>
              A tecnologia está em fase piloto, com disponibilidade, condições,
              custos e ativação sujeitos a análise técnica e as regras
              contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
