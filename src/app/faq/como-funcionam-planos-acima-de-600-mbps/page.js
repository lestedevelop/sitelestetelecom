import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funcionam planos acima de 600 Mbps? | Leste",
  description:
    "Disponibilidade, testes tecnicos e condicoes para planos acima de 600 Mbps.",
};

export default function ComoFuncionamPlanosAcimaDe600Mbps() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funcionam planos acima de 600 Mbps?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A disponibilidade de planos acima de 600 Mbps depende de
              condicoes tecnicas e da capacidade da rede no local.
            </p>

            <p>
              A ativacao esta sujeita a testes no momento da instalacao, e nem
              todas as regioes possuem suporte para velocidades mais altas,
              como 800 Mbps ou 1 Gbps.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Para o funcionamento adequado
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>A rede local deve suportar altas velocidades.</li>
                <li>
                  A estrutura interna precisa estar em padrao Gigabit Ethernet.
                </li>
                <li>Os testes devem ser feitos por cabo, diretamente na ONU.</li>
              </ul>
            </div>

            <p>
              O desempenho pode variar conforme o ambiente e os equipamentos
              utilizados.
            </p>

            <p>
              Dispositivos antigos ou testes via Wi-Fi ou navegador podem
              apresentar resultados inferiores ao esperado.
            </p>

            <p>
              Alteracoes no sinal optico, como danos ou atenuacoes, podem
              impactar a qualidade do servico. Nesses casos, pode ser
              necessario migrar para um plano inferior, sem custo adicional.
            </p>

            <p>
              A garantia de banda segue a regulamentacao da Anatel, com entrega
              minima de 40% da velocidade nominal.
            </p>
          </div>

          <FaqNote>
            <p>
              A contratacao de planos acima de 600 Mbps depende de viabilidade
              tecnica, testes no local e aceite das condicoes no momento da
              ativacao.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
