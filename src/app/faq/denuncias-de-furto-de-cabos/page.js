import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como denunciar furto de cabos ou sabotagem? | Leste",
  description:
    "Informações sobre como denunciar furto de cabos, sabotagem e outras ocorrências que afetam a rede da Leste.",
};

export default function DenunciaFurtoPage() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como denunciar furto de cabos ou sabotagem?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode denunciar situações que afetem a rede da Leste, como
              furto de cabos, danos a equipamentos, sabotagens ou outras ações
              suspeitas.
            </p>

            <p>
              Para enviar a denúncia à Leste, encaminhe relatos, fotos ou
              vídeos para o e-mail
              {" "}
              <a className="text-primary underline underline-offset-2" href="mailto:sac@lestetelecom.com.br">
                sac@lestetelecom.com.br
              </a>
              , informando o máximo de detalhes possível.
            </p>

            <p>
              Também é possível realizar denúncias por canais externos, como o
              Disque Denúncia, pelo telefone ou WhatsApp (21) 2253-1177, com
              opção de anonimato.
            </p>

            <p>
              As denúncias podem ser feitas de forma anônima, e o sigilo das
              informações é garantido.
            </p>
          </div>

          <FaqNote>
            <p>
              Relatos com fotos, vídeos e detalhes ajudam na apuração, mas a
              denúncia pode ser feita sem identificar o denunciante.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
