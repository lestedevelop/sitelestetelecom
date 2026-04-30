import ContactPill from "@/pageComponents/faq/ContactPill";
import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";

function Icon({ children }) {
  return <span className="inline-flex h-5 w-5 items-center justify-center">{children}</span>;
}

export default function SupportFooter() {
  return (
    <section className="bg-light">
      <div className="container pb-16 pt-10">
        <div className="px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-col itens-start lg:flex-row lg:justify-between lg:items-center gap-x-6 gap-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-14 w-14 items-center justify-center text-primary">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2h-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 12v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-[28px] font-extrabold text-primary md:text-[34px]">
                  Ficou com duvidas?
                </h3>
                <p className="mt-2 text-base text-darkgreen md:text-lg">
                  Nosso atendimento esta disponivel 24h.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-darkgreen md:text-xl">
                Canais de atendimento
              </p>

              <div className="mt-5 gap-3 flex flex-col md:flex-row lg:justify-between items-center">
                <ContactPill
                  href="https://wa.me/552120201300"
                  label="021 2020-1300"
                  className="min-w-full md:min-w-[190px]"
                  icon={
                    <Icon>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 11.5a8.5 8.5 0 1 1-15.4 5.1L4 20l3.6-.6A8.5 8.5 0 0 0 20 11.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.5 9.5c.3 1.2 1.8 2.8 3 3 .4.1.8 0 1.1-.2l.9-.5c.3-.2.7-.1.9.1l1 1c.2.2.2.6 0 .8-1 .9-2.3 1.2-3.6.9-3.1-.7-5.5-3.1-6.2-6.2-.3-1.3 0-2.6.9-3.6.2-.2.6-.2.8 0l1 1c.2.2.3.6.1.9l-.5.9c-.2.3-.3.7-.2 1.1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Icon>
                  }
                />

                <ContactPill
                  href="tel:+552139400130"
                  label="021 3940-0130"
                  className="min-w-full md:min-w-[190px]"
                  icon={
                    <Icon>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 16.9v3a2 2 0 0 1-2.2 2c-9.3-.9-16.7-8.3-17.6-17.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.2 1.2.5 2.4.9 3.5a2 2 0 0 1-.5 2.1L8.4 10.4a16 16 0 0 0 5.2 5.2l1.1-1.1a2 2 0 0 1 2.1-.5c1.1.4 2.3.7 3.5.9A2 2 0 0 1 22 16.9Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Icon>
                  }
                />

                <ContactPill
                  href="mailto:sac@lestetelecom.com.br"
                  label="sac@lestetelecom.com.br"
                  className="w-full md:min-w-[320px] md:w-auto"
                  icon={
                    <Icon>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 6h16v12H4V6Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m4 7 8 6 8-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Icon>
                  }
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8">
            <BackToIndexButton
              href="/faq"
              label="Voltar pro Indice"
              className="w-full justify-center text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
