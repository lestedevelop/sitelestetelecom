import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Qual o valor de reposição da câmera? | Leste",
  description: "Valores de reposição das câmeras Leste Câmeras.",
};

const replacementValues = [
  ["EZVIZ Interna Fixa - H1C", "R$ 249,00"],
  ["EZVIZ Interna 360º - H6C", "R$ 299,00"],
];

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Qual o valor de reposição da câmera?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Em caso de dano ou extravio dos equipamentos cedidos pela Leste e
              que estejam sob a responsabilidade do cliente, poderá ser cobrado
              o valor de reposição.
            </p>
            <div className="overflow-hidden rounded-xl border border-graylighter">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead className="bg-light text-darkgreen">
                  <tr>
                    <th className="px-4 py-3 font-bold">Modelo</th>
                    <th className="px-4 py-3 font-bold">Valor de Reposição</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graylighter">
                  {replacementValues.map(([model, value]) => (
                    <tr key={model}>
                      <td className="px-4 py-3">{model}</td>
                      <td className="px-4 py-3 font-bold text-darkgreen">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <FaqNote>
            <p>
              Os valores podem ser atualizados conforme a política comercial
              vigente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
