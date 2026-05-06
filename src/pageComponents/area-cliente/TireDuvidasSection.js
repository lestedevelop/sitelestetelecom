import Link from "next/link";

const FAQ_ITEMS = [
  {
    label: "Estou sem internet. O que devo fazer?",
    href: "/faq/sem-internet",
  },
  {
    label: "Prazo de visitas tecnicas.",
    href: "/faq/prazo-de-visitas-tecnicas",
  },
  {
    label: "Desligar e ligar os equipamentos pode resolver o problema?",
    href: "/faq/desligar-e-ligar-os-equipamentos-pode-resolver",
  },
  {
    label: "Ha um LED vermelho piscando na ONU. O que devo fazer?",
    href: "/faq/led-vermelho-aceso",
  },
  {
    label: "Como criar o discador de conexao Banda Larga?",
    href: "/faq/como-criar-o-discador-de-conexao-de-banda-larga",
  },
];

function ArrowIcon() {
  return (
      <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7365 9.95864L10.3511 1.11523L1.11523 3.50894M10.3511 1.11523L1.11523 15.0785" stroke="#009473" strokeWidth="2.22906" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

  );
}

export default function TireDuvidasSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#009373_0%,#045441_100%)] py-14 text-white md:py-20 lg:py-24 lg:pb-36 -mt-12 translate-y-10 xl:translate-y-16 lg:-mt-24">
      <div className="container gap-10 flex-col flex lg:flex-row lg:items-center">
        <div className="flex lg:flex-col gap-x-4 items-center">
          <h2 className="max-w-[420px] text-2xl lg:text-8xl font-bold leading-[0.92] tracking-[-0.05em] md:text-[5.6rem]">
            Tire&nbsp;suas
            <br />
            Dúvidas
          </h2>

          <Link
            href="/faq"
            className="lg:mt-8 w-full inline-flex  min-h-8 lg:min-h-14 items-center justify-center rounded-full bg-white px-4 lg:px-8 text-sm lg:text-2xl font-bold text-primary transition hover:-translate-y-px hover:bg-light"
          >
            Acesse o FAQ completo
          </Link>
        </div>

        <div className="w-full lg:max-w-[640px] lg:ml-auto">
          <button
            type="button"
            className="mb-4 inline-flex items-center gap-2 text-left text-base lg:text-2xl font-light text-light"
          >
            Principais duvidas
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-9 items-center justify-between gap-4 rounded-full bg-white px-4 text-sm font-semibold text-primary transition hover:-translate-y-px hover:bg-light md:min-h-10 md:px-5"
              >
                <span className="line-clamp-1">{item.label}</span>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
