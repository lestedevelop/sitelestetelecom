"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Se faltar energia e eu tiver um Leste UP, meu Wi-Fi continuará funcionando normalmente?",
    answer:
      "Sim. Desde que o roteador esteja conectado ao Leste UP e os demais dispositivos continuem alimentados, sua conexão pode seguir ativa durante a falta de energia.",
  },
  {
    question: "Como sei se o Leste UP está carregado?",
    answer:
      "O dispositivo possui indicadores de LED que mostram o status da carga. O ideal é mantê-lo sempre conectado à energia.",
  },
  {
    question: "O que acontece se eu conectar um equipamento não suportado?",
    answer:
      "Após a instalação, evite ao máximo alterar ou interferir no fornecimento de energia do equipamento. Caso seja conectado incorretamente, o Leste UP pode sofrer uma sobrecarga e se desligar automaticamente para evitar danos.",
  },
  {
    question: "Posso utilizar um único Leste UP para toda a minha rede Mesh?",
    answer:
      "Não, cada repetidor Mesh precisa de um Leste UP próprio para manter a cobertura.",
  },
  {
    question: "Em quais cidades será ofertado?",
    answer:
      "O Leste UP está disponível atualmente para clientes residenciais das cidades de Niterói, Maricá e Rio Bonito.",
  },
  {
    question: "Quais são os valores e a forma de pagamento?",
    answer:
      "Atualmente, a mensalidade referente a um equipamento Leste UP é de R$35,00, independentemente do plano contratado.",
  },
];

export default function LesteUpFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#00786d] text-white">
      <div className="container py-14 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-4xl font-semibold text-[#a9fff6] md:text-[3.3rem]">
            FAQ
          </h2>

          <div className="mt-8 divide-y divide-white/18 py-2">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left md:py-7"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="max-w-[760px] text-base font-semibold leading-relaxed text-[#d8fff9] md:text-[1.25rem]">
                      {item.question}
                    </span>
                    <span
                      className={`text-3xl font-light text-[#8fffe6] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="pb-6 pr-8 text-sm leading-relaxed text-white/82 md:pb-8 md:text-base">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
