import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

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
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Pelo site:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Acesse: portal.lestetelecom.com.br/login</li>
                <li>Faça login com CPF/CNPJ e senha</li>
                <li>Acesse o menu Faturas</li>
                <li>Clique em Pagar agora e escolha Boleto</li>
              </ul>
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
