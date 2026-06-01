import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a tecnologia Leste Ultra (XGS-PON)? | Leste",
  description:
    "Informacoes sobre cobertura, instalacao, rede interna e condicoes de uso da tecnologia Leste Ultra (XGS-PON).",
};

export default function ComoFuncionaATecnologiaLesteUltraXGSPON() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a tecnologia Leste Ultra (XGS-PON)?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A tecnologia Leste Ultra (XGS-PON) esta em fase piloto e possui
              disponibilidade limitada, sendo liberada apenas apos analise
              tecnica de viabilidade no endereco.
            </p>

            <p>
              Atualmente, a cobertura esta disponivel apenas em algumas areas de
              Niteroi-RJ e Marica-RJ, estando sujeita a limitacoes tecnicas e
              de infraestrutura.
            </p>

            <p>
              A contratacao exige pre-cadastro e validacao no local, nao
              havendo garantia de instalacao ate a aprovacao final. Mesmo apos o
              pedido, podem existir limitacoes tecnicas que impecam a ativacao
              do servico.
            </p>

            <p>
              O servico e voltado para uso profissional ou entusiasta e exige
              estrutura adequada. A rede interna, a distribuicao da conexao e os
              equipamentos utilizados no imovel sao de responsabilidade do
              cliente.
            </p>

            <p>
              O plano e fornecido, em geral, sem roteador Wi-Fi, com entrega de
              ONU com saida de alta capacidade (10Gbps). A rede interna deve
              suportar velocidades como 2.5G, 5G, 7.5G ou 10G, nos padroes
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
                <li>Cat 5: ate 100 Mb/s (sem blindagem)</li>
                <li>Cat 5e: ate 1 Gb/s (sem blindagem)</li>
                <li>Cat 6: ate 10 Gb/s (sem blindagem)</li>
                <li>Cat 6a: ate 10 Gb/s (com blindagem)</li>
                <li>Cat 7: ate 10 Gb/s (com blindagem)</li>
                <li>Cat 8: ate 40 Gb/s (com blindagem)</li>
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
              A instalacao possui custo, que pode variar conforme o plano, o
              tipo de rede e as condicoes do endereco. Planos com roteador Wi-Fi
              podem ter valores diferentes.
            </p>

            <p>
              Todos os planos sao de uso individual, sendo proibida a divisao ou
              revenda do servico entre pessoas ou enderecos distintos.
            </p>

            <p>
              A garantia de banda segue os limites legais e contratuais.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Valores de referencia para reposicao
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
              A tecnologia esta em fase piloto, com disponibilidade, condicoes,
              custos e ativacao sujeitos a analise tecnica e as regras
              contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
