import Image from "next/image";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import passo01 from "@/assets/faq/como-acessar-app-central/leste-clube-passo-01.svg";
import passo02 from "@/assets/faq/como-acessar-app-central/leste-clube-passo-02.svg";
import passo03 from "@/assets/faq/como-acessar-app-central/leste-clube-passo-03.svg";
import passo04 from "@/assets/faq/como-acessar-app-central/leste-clube-passo-04.svg";
import passo05 from "@/assets/faq/como-acessar-app-central/leste-clube-passo-05.svg";
import passo06 from "@/assets/faq/como-acessar-app-central/leste-clube-passo-06.svg";

const PASSOS_LESTE_CLUBE = [
  { image: passo01, alt: "Abra o aplicativo Leste Central" },
  { image: passo02, alt: "Faça login no Leste Central" },
  { image: passo03, alt: "Acesse a área Leste Clube" },
  { image: passo04, alt: "Escolha um benefício no Leste Clube" },
  { image: passo05, alt: "Valide o cupom do benefício" },
  { image: passo06, alt: "Finalize sua compra com o benefício" },
];

export const metadata = {
  title: "Como acessar o Leste Clube? | Leste",
  description:
    "Passo a passo para clientes Leste acessarem descontos e benefícios do Leste Clube.",
};

export default function ComoAcessarOLesteClube() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como acessar o Leste Clube?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p className="font-bold">Para acessar:</p>

            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Baixe e abra o app Leste Central: {" "}
                <a
                  href="https://onelink.to/lestecentral"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline underline-offset-2"
                >
                  onelink.to/lestecentral
                </a>
                .
              </li>
              <li>Faça login.</li>
              <li>Acesse a área Leste Clube.</li>
              <li>Escolha o benefício desejado.</li>
              <li>Valide o cupom.</li>
              <li>Finalize sua compra!</li>
            </ol>

            <div className="grid gap-5 pt-2 md:grid-cols-2">
              {PASSOS_LESTE_CLUBE.map((passo, index) => (
                <figure
                  key={passo.alt}
                  className="overflow-hidden rounded-xl border border-primary/10 bg-primary/5 shadow-sm"
                >
                  <Image
                    src={passo.image}
                    alt={passo.alt}
                    className="h-auto w-full"
                    sizes="(min-width: 768px) 420px, 100vw"
                  />
                  <figcaption className="px-4 py-3 text-sm font-semibold text-darkgreen">
                    Passo {index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p>
              Confira também o passo a passo em vídeo: {" "}
              <a
                href="https://youtu.be/W2BfKG7MBSc?si=8ig3LxXeL2YEaKjS"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline underline-offset-2"
              >
                Acesse o Leste Clube!
              </a>
            </p>

            <p>
              O Leste Clube é um benefício disponível para clientes Leste
              ativos, com descontos em mais de 400 parceiros, em categorias
              como alimentação, lazer e outros serviços.
            </p>
          </div>

          <FaqNote>
            <p>
              A disponibilidade dos descontos, parceiros, cupons e condições
              de uso pode variar conforme as regras da plataforma e dos
              estabelecimentos participantes. Em caso de dúvidas, entre em
              contato pelo telefone/WhatsApp {" "}
              <a
                href="https://wa.me/552120201300"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline underline-offset-2"
              >
                (021) 2020-1300
              </a>
              .
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
