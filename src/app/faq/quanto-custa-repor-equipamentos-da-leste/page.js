import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Quanto custa repor equipamentos da Leste? | Leste",
  description:
    "Valores de referência para reposição de equipamentos cedidos pela Leste Telecom.",
};

const replacementValues = [
  ["Roteador 300 Mbps", "R$ 120,00"],
  ["Roteador AC", "R$ 230,00"],
  ["Roteador AX", "R$ 270,00"],
  ["ONU sem Wi-Fi", "R$ 320,00"],
  ["ONU com Wi-Fi 300 Mbps", "R$ 450,00"],
  ["ONU AC", "R$ 640,00"],
  ["ONU AX", "R$ 640,00"],
  ["Repetidor mesh", "R$ 750,00"],
  ["Conector", "R$ 20,00"],
  ["Patch cord", "R$ 30,00"],
  ["PTO", "R$ 30,00"],
  ["Cordão óptico", "R$ 65,00"],
  ["Fonte de alimentação (por unidade)", "R$ 80,00"],
  ["Nobreak", "R$ 370,00"],
];

export default function QuantoCustaReporEquipamentosDaLeste() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Quanto custa repor equipamentos da Leste?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Pode haver cobrança para reposição de equipamentos cedidos em caso
              de dano ou extravio.
            </p>

            <p>
              Em caso de responsabilidade do assinante, podem ser aplicados os
              seguintes valores de referência:
            </p>

            <div className="overflow-hidden rounded-xl border border-graylighter">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead className="bg-light text-darkgreen">
                  <tr>
                    <th className="px-4 py-3 font-bold">Equipamento</th>
                    <th className="px-4 py-3 font-bold">Valor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graylighter">
                  {replacementValues.map(([equipment, value]) => (
                    <tr key={equipment}>
                      <td className="px-4 py-3">{equipment}</td>
                      <td className="px-4 py-3 font-bold text-darkgreen">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              No caso da ONU com Wi-Fi 300 Mbps, o valor é o mesmo
              independentemente do número de portas LAN.
            </p>

            <p>
              Sinais de uso normal, como descoloração e pequenos arranhões, não
              são considerados danos.
            </p>
          </div>

          <FaqNote>
            <p>Os valores podem sofrer alterações conforme o mercado.</p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
