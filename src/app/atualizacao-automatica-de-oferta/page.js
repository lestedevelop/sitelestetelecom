import Link from "next/link";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import SupportFooter from "@/pageComponents/faq/SupportFooter";

export const metadata = {
  title: "Atualização automática de oferta | Leste",
  description:
    "Informações sobre a atualização automática de ofertas do portfólio da Leste.",
};

const questions = [
  {
    title: "Por que meu plano está sendo alterado?",
    answer:
      "A oferta atualmente vinculada ao seu contrato não faz mais parte do portfólio comercial vigente da Leste e será substituída por uma nova oferta.",
  },
  {
    title: "Preciso assinar um novo contrato?",
    answer:
      "Não. A migração será realizada sem necessidade de envio de novos documentos ou assinatura de novo contrato.",
  },
  {
    title: "Haverá uma nova fidelização?",
    answer:
      "Não. A migração para a oferta indicada nesta comunicação não dará início a um novo período de fidelização.",
  },
  {
    title: "Posso escolher outro plano?",
    answer:
      "Sim. Você poderá consultar as demais ofertas disponíveis no portfólio da Leste e escolher outra opção, observadas as condições específicas da oferta escolhida.",
  },
  {
    title: "Se eu escolher outro plano, haverá fidelização?",
    answer:
      "Dependerá das condições da oferta escolhida. Algumas ofertas podem prever permanência mínima quando houver contratação de condições que a justifiquem, observada a regulamentação aplicável.",
  },
  {
    title: "Minha data de vencimento será alterada?",
    answer: "Não. Sua data de vencimento permanecerá a mesma.",
  },
  {
    title: "Preciso trocar meus equipamentos?",
    answer:
      "A necessidade de troca ou inclusão de equipamentos dependerá da oferta escolhida e das condições técnicas para sua instalação.",
  },
  {
    title: "O que acontece com os serviços adicionais do meu plano?",
    answer:
      "Os serviços incluídos na nova oferta serão aqueles indicados nesta comunicação. Caso você escolha outra oferta, deverão ser observados os serviços e condições correspondentes ao plano escolhido.",
  },
];

export default function AtualizacaoAutomaticaDeOfertaPage() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={<>Matriz 01 | Atualização automática de oferta</>}
          eyebrow="Comunicado ao cliente"
          showBackButton={false}
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <p className="text-sm font-semibold text-primary">
            Última atualização: 27/08/2026
          </p>

          <div className="mt-6 space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p className="font-bold text-darkgreen">Olá, Prezado Cliente!</p>

            <p>
              A Leste trabalha continuamente para oferecer aos seus clientes uma
              experiência de conexão cada vez melhor, com investimentos
              permanentes em infraestrutura, equipamentos, tecnologia e
              atendimento.
            </p>

            <p>
              Atualmente, a Leste está entre os provedores de destaque em
              velocidade e qualidade de conexão, além de possuir o selo RA1000 do
              Reclame Aqui, reconhecimento relacionado à sua reputação e
              relacionamento com os consumidores. Dados de 01/03/2026 até
              31/08/2026.
            </p>

            <p>
              Para acompanhar a evolução do mercado e os custos relacionados à
              prestação do serviço, estamos realizando uma atualização do nosso
              portfólio de ofertas.
            </p>

            <p>
              Se você está recebendo esta comunicação, significa que a oferta
              atualmente vinculada ao seu contrato não faz mais parte do nosso
              portfólio comercial vigente e, por isso, será substituída por uma
              nova oferta.
            </p>

            <p>Sua data de vencimento permanecerá a mesma.</p>

            <p className="font-bold text-darkgreen">
              Não será necessária a assinatura de um novo contrato ou o envio de
              novos documentos para essa migração.
            </p>

            <p>
              A migração para a nova oferta{" "}
              <strong>não dará início a um novo período de fidelização</strong>.
            </p>

            <p>
              Você também poderá consultar e escolher outras ofertas disponíveis
              no portfólio da Leste, observadas as condições específicas de cada
              uma. Algumas ofertas podem envolver instalação, substituição ou
              inclusão de equipamentos e, conforme suas condições e a
              regulamentação aplicável, poderão prever período de permanência
              mínima.
            </p>

            <p>
              Estamos comunicando esta alteração com mais de 30 (trinta) dias de
              antecedência, para que você tenha tempo suficiente para conhecer a
              nova oferta e, caso prefira, avaliar outras opções disponíveis.
            </p>

            <section className="pt-4">
              <h2 className="text-2xl font-bold text-darkgreen md:text-3xl">
                Ficou com alguma dúvida?
              </h2>
              <p className="mt-3">
                Preparamos um FAQ com as principais informações sobre a
                readequação da oferta:
              </p>

              <div className="mt-6 divide-y divide-graylighter rounded-xl border border-graylighter px-5 md:px-6">
                {questions.map((question) => (
                  <section key={question.title} className="py-5">
                    <h3 className="font-bold text-darkgreen">
                      {question.title}
                    </h3>
                    <p className="mt-2">{question.answer}</p>
                  </section>
                ))}
              </div>
            </section>

            <section className="pt-4">
              <h2 className="text-xl font-bold text-darkgreen">
                Ainda ficou com alguma dúvida?
              </h2>
              <p className="mt-3">
                Estamos à disposição pelo telefone ou WhatsApp{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=552120201300"
                  className="font-semibold text-primary underline underline-offset-2"
                >
                  (21) 2020-1300
                </a>{" "}
                ou pelo e-mail{" "}
                <a
                  href="mailto:sac@lestetelecom.com.br"
                  className="font-semibold text-primary underline underline-offset-2"
                >
                  sac@lestetelecom.com.br
                </a>
                .
              </p>
            </section>

            <p>
              Na Leste, acreditamos que transparência e comunicação clara são
              fundamentais para manter uma relação de confiança com nossos
              clientes.
            </p>

            <p className="font-bold text-darkgreen">Conte conosco!</p>

            <p>
              <strong>Saiba mais na categoria “Contratos” e “Planos” em:</strong>{" "}
              <Link
                href="/faq"
                className="font-semibold text-primary underline underline-offset-2"
              >
                www.lestetelecom.com.br/faq
              </Link>
            </p>
          </div>
        </article>
      </div>

      <SupportFooter showBackButton={false} />
    </main>
  );
}
