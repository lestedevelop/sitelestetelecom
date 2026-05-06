import Image from "next/image";
import { CircleAlert } from "lucide-react";
import FormIndicate from "@/components/Form/FormIndicate";
import indiqueImage from "@/assets/indique2.png";
import HeroSlide from "@/pageComponents/home/HeroSlide";

const PARTICIPATION_STEPS = [
  {
    number: "01",
    text: "Preencha o formulário acima com seus dados e do seu amigo.",
    accent: true,
  },
  {
    number: "02",
    text: "Aguarde seu amigo assinar.",
  },
  {
    number: "03",
    text: "Após seu amigo realizar o pagamento da primeira mensalidade você ganhará a mensalidade grátis na próxima fatura.",
  },
  {
    number: "04",
    text: "Pronto! No próximo mês você não pagará a mensalidade.",
  },
];

const REGULATION_ITEMS = [
  "O cliente ganhará um desconto de uma mensalidade por cada amigo que este indicar e assinar, qualquer plano.",
  "Se indicar mais amigos, os valores serão descontados na fatura imediatamente subsequente. Não há limite para o número de pessoas indicadas. Quanto mais amigos assinarem e quitarem as primeiras mensalidades mais descontos sucessivamente.",
  "Só serão computados como amigos indicados clientes devidamente instalados e com a primeira mensalidade em dia. Ou seja, apenas após o pagamento da primeira mensalidade de valor cheio será computado o amigo indicado.",
  "Somente serão considerados como amigo indicado novas contratações. Outros planos ou acesso para quem já é assinante não serão contabilizados. Consideramos já assinante todo CPF em nossa base.",
  "A promoção não depende de sorteio, concurso ou operação semelhante.",
  "O cliente garante ter obtido autorização da pessoa indicada para fornecer seus dados pessoais e de contato à Leste Telecom. Caso haja qualquer reclamação, seja em âmbito judicial ou extrajudicial da pessoa indicada, o cliente responderá por eventuais perdas e danos suportados pela empresa.",
  "Todos os dados do indicado devem ser colocados no formulário de nossa página. Dados incorretos ou faltantes podem invalidar a indicação.",
  "O amigo indicado terá de confirmar na hora da contratação dos serviços nome e ou CPF da pessoa que o indicou. A falta de confirmação por parte do indicado invalidará a indicação. Todas as ligações são gravadas.",
  "A atual promoção não envolve qualquer outro prêmio que não descontos em mensalidades.",
  "Caso dois ou mais clientes indiquem o mesmo amigo, será considerada somente a indicação feita em primeiro lugar.",
];

export default function IndiqueEGanheLestePage() {
  return (
    <div className="min-h-full bg-light">
      <HeroSlide />

      <section className="w-full bg-light">
        <div className="container grid gap-8 py-10 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-16">
          <div className="px-2 md:px-0">
            <div className="mt-4 text-center lg:mt-8 lg:text-left">
              <h1 className="text-[2.8rem] font-bold leading-none text-primary md:text-[4rem]">
                Indique e ganhe
              </h1>
              <p className="mx-auto mt-3 max-w-[24rem] text-base leading-tight text-darkgreen/85 md:text-[1.45rem] lg:mx-0 lg:max-w-[18rem] lg:text-[1.7rem]">
                Ao indicar um amigo e ele assinar, você ganha a próxima
                mensalidade grátis.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.7rem] bg-primary md:mt-10">
              <Image
                src={indiqueImage}
                alt="Clientes usando notebook"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>

          <div className="lg:pl-1">
            <FormIndicate />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#d8eeea]">
        <div className="container rounded-[2rem_2rem_0_0] px-6 py-12 md:px-10 md:py-16">
          <h2 className="text-center text-[2.8rem] font-bold leading-none text-primary md:text-[4rem]">
            Para participar é fácil!
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:hidden">
            {PARTICIPATION_STEPS.map((step) => (
              <article
                key={step.number}
                className={`flex min-h-[12rem] flex-col rounded-[2rem] px-5 py-6 ${
                  step.accent ? "bg-[#10d0af]" : "bg-darkgreen"
                }`}
              >
                <span
                  className={`text-center text-[2.6rem] font-bold leading-none ${
                    step.accent ? "text-darkgreen" : "text-[#effff9]"
                  }`}
                >
                  {step.number}
                </span>
                <p
                  className={`mt-5 text-sm font-semibold leading-tight ${
                    step.accent ? "text-darkgreen" : "text-light"
                  }`}
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden space-y-4 md:mt-12 md:block md:space-y-5">
            {PARTICIPATION_STEPS.map((step) => (
              <article
                key={step.number}
                className={`flex flex-col gap-3 rounded-full px-8 py-5 md:flex-row md:items-center md:gap-8 md:px-16 md:py-7 ${
                  step.accent ? "bg-[#10d0af]" : "bg-darkgreen"
                }`}
              >
                <span
                  className={`min-w-24 text-center text-[3.25rem] font-bold leading-none md:min-w-28 md:text-[4.1rem] ${
                    step.accent ? "text-darkgreen" : "text-[#effff9]"
                  }`}
                >
                  {step.number}
                </span>
                <p
                  className={`max-w-4xl text-xl font-semibold leading-tight md:text-[2rem] ${
                    step.accent ? "text-darkgreen" : "text-light"
                  }`}
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-12 lg:pb-24 xl:pb-36">
        <div className="container px-6 py-12 text-darkgreen md:px-10 md:py-16">
          <div className="flex items-center gap-3">
            <CircleAlert className="h-8 w-8 text-darkgreen" strokeWidth={2.2} />
            <h2 className="text-[2.9rem] font-bold leading-none md:text-[4rem]">
              Regulamento
            </h2>
          </div>

          <div className="mt-8 space-y-1 text-base leading-7 text-darkgreen/85 md:text-[1.45rem] md:leading-8">
            <p>Regras e condições</p>
            <p>PROMOÇÃO INDIQUE E GANHE LESTE TELECOM 2024</p>
            <p>Regras Gerais da Promoção</p>
          </div>

          <ol className="mt-8 space-y-3 text-base leading-7 text-darkgreen/90 md:text-[1.35rem] md:leading-8">
            {REGULATION_ITEMS.map((item, index) => (
              <li key={item}>
                <span className="font-bold">{index + 1}. </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
