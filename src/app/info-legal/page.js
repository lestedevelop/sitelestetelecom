import Image from "next/image";
import logoAtual from "@/assets/Logo.svg";
import logoAntigo from "@/assets/LogoAntigo.png";

export const metadata = {
  title: "Informações legais | Leste",
  description:
    "Dados cadastrais, marcas registradas, contatos e documentos oficiais da Leste Telecom.",
};

const legalLinks = [
  {
    label: "Contrato de prestação de serviços",
    href: "/docs/CONTRATO.pdf",
  },
  {
    label: "Outorga SCM",
    href: "/docs/anatellestescm.pdf",
  },
];

export default function InfoLegalPage() {
  return (
    <main className="bg-light">
      <section className="w-full bg-light">
        <div className="container py-12 md:py-16">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase text-primary">
              Leste Telecom
            </p>
            <h1 className="mt-3 text-4xl font-bold text-darkgreen md:text-5xl">
              Informações legais.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-graylight md:text-lg md:leading-8">
              Consulte os dados cadastrais, marcas registradas, contatos e
              documentos oficiais da Leste Telecom.
            </p>
          </div>

          <article className="mt-10 max-w-5xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
            <div className="space-y-10 text-base leading-7 text-dark md:text-lg md:leading-8">
              <section>
                <h2 className="text-2xl font-bold text-darkgreen">
                  Marcas registradas
                </h2>
                <p className="mt-3">
                  Leste e Leste Telecom são marcas registradas no INPI pela
                  empresa Leste Flu Serviços de Telecom LTDA.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-graylighter bg-light px-6 py-6">
                    <div className="flex min-h-28 items-center justify-center">
                      <Image
                        src={logoAtual}
                        alt="Logo atual da Leste Telecom"
                        className="h-auto w-full max-w-56"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-graylighter bg-light px-6 py-6">
                    <div className="flex min-h-28 items-center justify-center">
                      <Image
                        src={logoAntigo}
                        alt="Logo antigo da Leste Telecom"
                        className="h-auto w-full max-w-56"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-darkgreen">
                  Dados da empresa
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-graylighter bg-light px-5 py-4">
                    <p className="text-sm font-semibold uppercase text-graylight">
                      Razão social
                    </p>
                    <p className="mt-1 font-semibold text-darkgreen">
                      Leste Flu Serviços de Telecom LTDA
                    </p>
                  </div>

                  <div className="rounded-xl border border-graylighter bg-light px-5 py-4">
                    <p className="text-sm font-semibold uppercase text-graylight">
                      CNPJ
                    </p>
                    <p className="mt-1 font-semibold text-darkgreen">
                      02.533.755/0001-87
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-graylighter bg-light px-5 py-4">
                  <p className="text-sm font-semibold uppercase text-graylight">
                    Endereço
                  </p>
                  <p className="mt-1 font-semibold text-darkgreen">
                    Avenida Almirante Tamandaré, 600 - Piratininga - Niterói -
                    RJ - CEP 24350-380
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-darkgreen">
                  Canais de contato
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <a
                    className="rounded-xl border border-graylighter bg-light px-5 py-4 transition-colors hover:border-primary"
                    href="mailto:sac@lestetelecom.com.br"
                  >
                    <p className="text-sm font-semibold uppercase text-graylight">
                      E-mail
                    </p>
                    <p className="mt-1 break-words font-semibold text-primary">
                      sac@lestetelecom.com.br
                    </p>
                  </a>

                  <div className="rounded-xl border border-graylighter bg-light px-5 py-4">
                    <p className="text-sm font-semibold uppercase text-graylight">
                      Telefone e WhatsApp
                    </p>
                    <p className="mt-1 font-semibold text-darkgreen">
                      (021) 2020-1300
                    </p>
                  </div>

                  <div className="rounded-xl border border-graylighter bg-light px-5 py-4">
                    <p className="text-sm font-semibold uppercase text-graylight">
                      Telefone
                    </p>
                    <p className="mt-1 font-semibold text-darkgreen">
                      (021) 3940-0130
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-darkgreen">
                  Documentos oficiais
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {legalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-20 items-center justify-between gap-4 rounded-xl border border-graylighter bg-light px-5 py-4 font-semibold text-darkgreen transition-colors hover:border-primary hover:text-primary"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">Abrir</span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
