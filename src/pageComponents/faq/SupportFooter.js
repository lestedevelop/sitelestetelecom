import Image from "next/image";
import ContactPill from "@/pageComponents/faq/ContactPill";
import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";
import whatsappContactIcon from "@/assets/icons/footer/whatsapp-contact.svg";
import telefoneContactIcon from "@/assets/icons/footer/telefone-contact.svg";
import mailContactIcon from "@/assets/icons/footer/mail-contact.svg";

function Icon({ children }) {
  return <span className="inline-flex h-5 w-5 items-center justify-center">{children}</span>;
}

export default function SupportFooter() {
  return (
    <section className="bg-light">
      <div className="container pb-16 pt-10">
        <div className="px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-col itens-start lg:flex-row lg:justify-between lg:items-center gap-x-6 gap-y-4">
            <div className="flex items-start gap-x-2">
              <div className="mt-1 flex h-14 w-14 text-primary">
                <svg width="120" viewBox="0 0 24 24" fill="none">
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
                <h3 className="text-xl mt-2 md:text-[28px] font-extrabold text-primary md:text-[34px]">
                  Ficou com duvidas?
                </h3>
                <p className="mt-2 text-base text-darkgreen md:text-lg">
                  Nosso atendimento esta disponivel 24h.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold text-center md:text-left text-darkgreen md:text-xl">
                Canais de atendimento
              </p>

              <div className="mt-5 gap-3 flex flex-col md:flex-row lg:justify-between items-center">
                <ContactPill
                  href="https://wa.me/552120201300"
                  label="021 2020-1300"
                  className="min-w-full md:min-w-[190px]"
                  icon={
                    <Icon>
                      <Image src={whatsappContactIcon} alt="" className="h-5 w-5" />
                    </Icon>
                  }
                />

                <ContactPill
                  href="tel:+552139400130"
                  label="021 3940-0130"
                  className="min-w-full md:min-w-[190px]"
                  icon={
                    <Icon>
                      <Image src={telefoneContactIcon} alt="" className="h-5 w-5" />
                    </Icon>
                  }
                />

                <ContactPill
                  href="mailto:sac@lestetelecom.com.br"
                  label="sac@lestetelecom.com.br"
                  className="w-full md:min-w-[320px] md:w-auto"
                  icon={
                    <Icon>
                      <Image src={mailContactIcon} alt="" className="h-5 w-5" />
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
