import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import Image from "next/image";
import boletoApp1 from "@/assets/faq/telaapp1.png";
import boletoApp2 from "@/assets/faq/telaapp2.webp";
import boletoApp3 from "@/assets/faq/telaapp3.webp";
import boletoApp4 from "@/assets/faq/telaapp4.webp";
import boletoApp5 from "@/assets/faq/telaapp5.webp";
import boletoSite1 from "@/assets/faq/retiradaboleto1.png";
import boletoSite2 from "@/assets/faq/retiradaboleto2.webp";
import boletoSite3 from "@/assets/faq/retiradaboleto3.webp";
import boletoWhatsapp1 from "@/assets/faq/boletowhatsapp1.webp";
import boletoWhatsapp2 from "@/assets/faq/boletowhatsapp2.webp";
import boletoWhatsapp3 from "@/assets/faq/boletowhatsapp3.webp";
import boletoWhatsapp4 from "@/assets/faq/boletowhatsapp4.png";
import boletoWhatsapp5 from "@/assets/faq/boletowhatsapp5.webp";
import boletoWhatsapp6 from "@/assets/faq/boletowhatsapp6.webp";
import boletoWhatsapp7 from "@/assets/faq/boletowhatsapp7.webp";
import boletoWhatsapp8 from "@/assets/faq/boletowhatsapp8.webp";

const APP_BILLING_STEPS = [
  {
    text: "Baixe o app da Leste na Play Store.",
    image: boletoApp1,
    alt: "Tela inicial do aplicativo da Leste na Play Store",
  },
  {
    text: 'Abra o app e faça login com seus dados cadastrais. Se você não souber a sua senha, clique na opção "Esqueci minha senha" para criar uma nova.',
    image: boletoApp2,
    alt: "Tela de login e senha do aplicativo da Leste",
  },
  {
    text: "Clique na opção “Pagar fatura” na página principal do aplicativo.",
    image: boletoApp3,
    alt: "Tela de faturas no aplicativo da Leste",
  },
  {
    text: "Escolha a opção de pagamento desejada: PIX ou boleto.",
    image: boletoApp4,
    alt: "Tela para escolher pagamento de fatura no aplicativo da Leste",
  },
  {
    text: "Para opção boleto, você pode copiar o código de barras para pagar no app do seu banco ou baixar a fatura no seu celular.",
    image: boletoApp5,
    alt: "Tela de PIX ou boleto no aplicativo da Leste",
  },
];

const SITE_BILLING_STEPS = [
  {
    text: (
      <>
        Acesse o site da Leste e clique em “Central do Assinante” ou vá direto
        para:{" "}
        <a
          href="https://portal.lestetelecom.com.br/login"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          portal.lestetelecom.com.br/login
        </a>
      </>
    ),
  },
  {
    text: "Na aba “Portal do Assinante”, insira suas informações de CPF/CNPJ e senha e clique em “Fazer Login”.",
    image: boletoSite1,
    alt: "Tela de login do Portal do Assinante para acessar faturas",
  },
  {
    text: "No menu lateral, clique em “Faturas”.",
    image: boletoSite2,
    alt: "Tela do Portal do Assinante com menu lateral de faturas",
  },
  {
    text: "Clique em “Pagar agora” na fatura em aberto e escolha a opção “Boleto” para fazer o download.",
    image: boletoSite3,
    alt: "Tela de pagamento da fatura com opção de boleto",
  },
];

const WHATSAPP_BILLING_STEPS = [
  {
    text: "Inicie uma conversa no WhatsApp mandando uma mensagem para o nosso número (21) 2020-1300.",
    image: boletoWhatsapp1,
    alt: "Tela inicial da conversa no WhatsApp da Leste",
  },
  {
    text: 'Responda "1" para sinalizar que você já é um assinante da Leste.',
    image: boletoWhatsapp2,
    alt: "Tela de identificação de assinante no WhatsApp da Leste",
  },
  {
    text: "Digite seu CPF ou CNPJ.",
    image: boletoWhatsapp3,
    alt: "Tela para informar CPF ou CNPJ no WhatsApp da Leste",
  },
  {
    text: "Digite sua senha de acesso. Caso não tenha uma, o chat irá solicitar a criação da senha.",
    image: boletoWhatsapp4,
    alt: "Tela para informar senha de acesso no WhatsApp da Leste",
  },
  {
    text: 'Responda "1" para assegurar que o número pertence a você e prosseguir o atendimento.',
    image: boletoWhatsapp5,
    alt: "Tela de confirmação do número no WhatsApp da Leste",
  },
  {
    text: 'Responda "5" para consultar as faturas em aberto.',
    image: boletoWhatsapp6,
    alt: "Tela de menu para consultar faturas em aberto no WhatsApp da Leste",
  },
  {
    text: "Responda com o número correspondente ao plano que você deseja obter a fatura.",
    image: boletoWhatsapp7,
    alt: "Tela de seleção do plano para obter fatura no WhatsApp da Leste",
  },
  {
    text: "Pronto. Agora você pode copiar o código de barras, pagar pelo PIX ou baixar o PDF da fatura.",
    image: boletoWhatsapp8,
    alt: "Tela com opções de pagamento da fatura no WhatsApp da Leste",
  },
];

export const metadata = {
  title: "Como emitir meu boleto? | Leste",
  description: "Informações sobre emissão de boleto pelo app, site e WhatsApp.",
};

export default function ComoEmitirMeuBoleto() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como emitir meu boleto?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Você pode emitir seu boleto pelo app, site ou WhatsApp.</p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Pelo app:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Baixe o app da Leste</li>
                <li>Faça login com seus dados</li>
                <li>Clique em Pagar fatura</li>
                <li>Escolha Boleto ou PIX</li>
                <li>Copie o código de barras ou baixe o arquivo</li>
              </ul>

              <details className="group mt-5 rounded-xl border border-graylighter bg-light px-4 py-4 md:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-darkgreen">
                  <span>Ver passo a passo pelo app</span>
                  <svg
                    className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>

                <div className="mt-5 space-y-6">
                  <p className="text-sm leading-6 text-graylight md:text-base">
                    Siga o passo a passo para emitir sua fatura pelo aplicativo
                    da Leste.
                  </p>

                  <ol className="space-y-6">
                    {APP_BILLING_STEPS.map((step, index) => (
                      <li
                        key={step.alt}
                        className="rounded-xl border border-graylighter bg-white p-4"
                      >
                        <p className="text-sm font-semibold leading-6 text-darkgreen md:text-base">
                          {index + 1}. {step.text}
                        </p>
                        <Image
                          src={step.image}
                          alt={step.alt}
                          className="mx-auto mt-4 h-auto w-full max-w-[360px] rounded-lg border border-graylighter"
                        />
                      </li>
                    ))}
                  </ol>

                  <p className="text-sm font-bold leading-6 text-darkgreen md:text-base">
                    Simples e direto no seu celular, sem precisar falar com o
                    atendimento!
                  </p>
                </div>
              </details>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Pelo site:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Acesse: portal.lestetelecom.com.br/login</li>
                <li>Faça login com CPF/CNPJ e senha</li>
                <li>Acesse o menu Faturas</li>
                <li>Clique em Pagar agora e escolha Boleto</li>
              </ul>

              <details className="group mt-5 rounded-xl border border-graylighter bg-light px-4 py-4 md:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-darkgreen">
                  <span>Ver passo a passo pelo site</span>
                  <svg
                    className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>

                <div className="mt-5 space-y-6">
                  <p className="text-sm leading-6 text-graylight md:text-base">
                    Siga as telas abaixo para baixar sua fatura pelo Portal do
                    Assinante.
                  </p>

                  <ol className="space-y-6">
                    {SITE_BILLING_STEPS.map((step, index) => (
                      <li
                        key={`site-boleto-${index}`}
                        className="rounded-xl border border-graylighter bg-white p-4"
                      >
                        <p className="text-sm font-semibold leading-6 text-darkgreen md:text-base">
                          {index + 1}. {step.text}
                        </p>
                        {step.image ? (
                          <Image
                            src={step.image}
                            alt={step.alt}
                            className="mx-auto mt-4 h-auto w-full max-w-[520px] rounded-lg border border-graylighter"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Pelo WhatsApp:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Envie mensagem para (21) 2020-1300</li>
                <li>Informe CPF/CNPJ e senha</li>
                <li>Acesse a opção de faturas em aberto</li>
                <li>Selecione o plano desejado para obter o boleto</li>
                <li>Caso não saiba a senha, utilize a opção “Esqueci minha senha”.</li>
              </ul>

              <details className="group mt-5 rounded-xl border border-graylighter bg-light px-4 py-4 md:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-darkgreen">
                  <span>Ver passo a passo pelo WhatsApp</span>
                  <svg
                    className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>

                <div className="mt-5 space-y-6">
                  <p className="text-sm leading-6 text-graylight md:text-base">
                    Siga as telas abaixo para consultar sua fatura pelo WhatsApp
                    da Leste.
                  </p>

                  <ol className="space-y-6">
                    {WHATSAPP_BILLING_STEPS.map((step, index) => (
                      <li
                        key={step.alt}
                        className="rounded-xl border border-graylighter bg-white p-4"
                      >
                        <p className="text-sm font-semibold leading-6 text-darkgreen md:text-base">
                          {index + 1}. {step.text}
                        </p>
                        <Image
                          src={step.image}
                          alt={step.alt}
                          className="mx-auto mt-4 h-auto w-full max-w-[360px] rounded-lg border border-graylighter"
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            </div>
          </div>

          <FaqNote>
            <p>
              No app, é possível copiar o código de barras ou baixar o boleto.
              No WhatsApp, pode ser necessário confirmar seus dados para
              acesso às faturas.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
