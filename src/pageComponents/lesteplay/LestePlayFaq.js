"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import chevron from "@/assets/lesteplay/duvidas-seta.svg";

const QUESTIONS = [
  {
    question: "O que é o Leste Play?",
    answer: "É o serviço de TV e streaming da Leste, acessado pela Watch conforme o plano contratado.",
  },
  {
    question: "Qual é a diferença entre os planos?",
    answer: "O Start é a opção de entrada, o Sports destaca esportes, o Cine + HBO foca em filmes e séries e inclui HBO Max, e o Family reúne uma seleção mais ampla de conteúdos.",
  },
  {
    question: "Todos os planos incluem HBO Max?",
    answer: "Não. A HBO Max está incluída no Cine + HBO.",
  },
  {
    question: "O Sports tem apenas esportes?",
    answer: "Não. O plano também inclui filmes, séries, notícias e variedades, conforme a grade.",
  },
  {
    question: "Posso assistir pelo celular e pela TV?",
    answer: "Sim, em dispositivos compatíveis com a Watch ou pelo navegador.",
  },
  {
    question: "Como faço para contratar?",
    answer: "Clique em “Assine agora” e siga as orientações para contratação.",
  },
  {
    question: "A programação pode mudar?",
    answer: "Sim. Conteúdos, canais e funcionalidades podem variar conforme o plano e sofrer alterações.",
  },
];

export default function LestePlayFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="flex w-full flex-col items-start gap-10 bg-white px-8 py-[60px] [--lp-x:max(0px,calc(50%-720px))] lg:gap-20 lg:pl-[calc(var(--lp-x)+100px)] lg:pr-[100px] lg:py-20">
      <h2 className="w-[223px] text-[32px] font-bold leading-[1.05] text-primary lg:w-auto lg:text-[64px]">Dúvidas sobre o Leste Play</h2>

      <ul className="flex w-full flex-col gap-6 lg:gap-10">
        {QUESTIONS.map(({question, answer}, index) => {
          const isOpen = openIndex === index;
          const answerId = `duvida-leste-play-${index + 1}`;
          return (
            <li key={question} className="flex w-full flex-col items-start gap-4 lg:w-fit">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex cursor-pointer items-center gap-[6.75px] text-left lg:gap-[14px]"
              >
                <span className="text-[15.42px] font-bold leading-[1.1] text-[#005542] transition-colors group-hover:text-[#5e5e5e] lg:text-[32px]">{question}</span>
                <Image
                  src={chevron}
                  alt=""
                  className={`h-[7.71px] w-[4.25px] shrink-0 transition-transform lg:h-4 lg:w-[8.83px] ${isOpen ? "-rotate-90" : "rotate-90"}`}
                />
              </button>
              <p id={answerId} hidden={!isOpen} className="text-sm leading-[1.2] text-[#005542] lg:w-0 lg:min-w-full lg:text-base">
                {answer}
              </p>
            </li>
          );
        })}
      </ul>

      <Link
        href="/faq?categoria=Leste+Play"
        className="whitespace-nowrap rounded-full bg-[#005542] px-6 py-3 text-xl font-bold leading-[1.1] text-white transition hover:brightness-125 lg:px-8 lg:py-[19px] lg:text-2xl"
      >
        Ver mais dúvidas
      </Link>
    </section>
  );
}
