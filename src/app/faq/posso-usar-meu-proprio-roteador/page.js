import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso usar meu próprio roteador? | Leste",
  description:
    "Orientações sobre uso de roteador próprio na rede da Leste Telecom.",
};

export default function PossoUsarMeuProprioRoteador() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso usar meu próprio roteador?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              É possível utilizar roteador próprio na rede, desde que ele seja
              conectado após a ONU da Leste.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Para isso:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Conecte o roteador à ONU.</li>
                <li>Configure o seu roteador conforme sua necessidade.</li>
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              A Leste permite o uso de roteadores e outros equipamentos de rede
              próprios após a ONU, porém não oferece suporte para equipamentos
              particulares.
            </p>
            <p>
              Não é permitido o uso de ONUs próprias na rede, mesmo que sejam da
              mesma marca ou modelo, sendo autorizadas apenas as ONUs fornecidas
              pela empresa.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
