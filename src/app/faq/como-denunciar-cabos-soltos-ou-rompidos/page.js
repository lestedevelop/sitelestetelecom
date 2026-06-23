import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como denunciar cabos soltos ou rompidos? | Leste",
  description:
    "Orientacoes para informar cabos soltos, rompidos ou emaranhados na rede.",
};

export default function ComoDenunciarCabosSoltosOuRompidos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como denunciar cabos soltos ou rompidos?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode informar à Leste quando identificar cabos soltos,
              rompidos ou emaranhados na rede.
            </p>

            <p>
              Para isso, envie a ocorrência com o máximo de detalhes possível:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Localização do cabo</li>
              <li>Foto, se possível</li>
            </ul>

            <p>Canais de contato:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Telefone e WhatsApp: (021) 2020-1300</li>
              <li>E-mail: sac@lestetelecom.com.br</li>
              <li>Redes sociais por mensagem privada</li>
            </ul>

            <p>
              Após o envio, uma equipe realiza a verificação para identificar se
              o cabo pertence à Leste e, se confirmado, realiza o reparo ou
              retiráda.
            </p>
          </div>

          <FaqNote>
            <p>
              Órgãos públicos também podem solicitar atendimento pelos mesmos
              canais, preferencialmente utilizando e-mail institucional.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
