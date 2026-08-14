import Image from "next/image";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import passo01 from "@/assets/faq/como-acessar-app-supercomics/supercomics-passo-01.svg";
import passo02 from "@/assets/faq/como-acessar-app-supercomics/supercomics-passo-02.svg";
import passo03 from "@/assets/faq/como-acessar-app-supercomics/supercomics-passo-03.svg";
import passo04 from "@/assets/faq/como-acessar-app-supercomics/supercomics-passo-04.svg";
import passo05 from "@/assets/faq/como-acessar-app-supercomics/supercomics-passo-05.svg";
import passo06 from "@/assets/faq/como-acessar-app-supercomics/supercomics-passo-06.svg";

const PASSOS_SUPERCOMICS = [
  { image: passo01, alt: "Baixe o aplicativo SuperComics" },
  { image: passo02, alt: "Selecione Entrar via parceiro no SuperComics" },
  { image: passo03, alt: "Busque por Leste Telecom no SuperComics" },
  { image: passo04, alt: "Entre no SuperComics usando seu CPF e sua senha" },
  { image: passo05, alt: "Confirme seus dados no SuperComics" },
  { image: passo06, alt: "Comece a ler no SuperComics" },
];

export const metadata = {
  title: "Como acessar o SuperComics? | Leste",
  description:
    "Passo a passo para clientes Leste acessarem histórias em quadrinhos digitais no SuperComics.",
};

export default function ComoAcessarOSuperComics() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como acessar o SuperComics?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p className="font-bold">Para acessar:</p>

            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Baixe o app da SuperComics: {" "}
                <a
                  href="https://onelink.to/supercomics"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline underline-offset-2"
                >
                  onelink.to/supercomics
                </a>
                .
              </li>
              <li>Clique em “Entrar via parceiro”.</li>
              <li>Busque por “Leste Telecom”.</li>
              <li>Faça seu login inserindo seu CPF e senha.</li>
              <li>Confirme seus dados.</li>
              <li>Comece a ler!</li>
            </ol>

            <div className="grid gap-5 pt-2 md:grid-cols-2">
              {PASSOS_SUPERCOMICS.map((passo, index) => (
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
              Confira o passo a passo em vídeo: {" "}
              <span className="font-semibold text-primary">
                Acesse o SuperComics!
              </span>
            </p>

            <p>
              O SuperComics é um benefício disponível para clientes Leste
              ativos, com acesso a histórias em quadrinhos digitais, conforme
              as condições do plano contratado.
            </p>
          </div>

          <FaqNote>
            <p>
              O benefício está disponível para clientes Leste ativos. A
              liberação, o acesso e as condições de uso seguem as regras da
              plataforma SuperComics. Em caso de dúvidas, entre em contato pelo
              telefone/WhatsApp {" "}
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
