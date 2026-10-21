"use client";

import {useState} from "react";
import {ACTIVATION_TABS} from "@/pageComponents/lesteplay/lestePlayActivationData";

const SUPPORT_WHATSAPP_URL = "https://wa.me/552120201300?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20da%20Leste.";
const CARD_MIN_HEIGHT = {"hbo-max": "min-h-[19.6875em]"};

function StepCard({step, minHeight}) {
  const {Illustration} = step;
  return (
    <article className={`flex w-[15.1em] flex-col gap-[2em] rounded-2xl bg-[#f5fffd] p-[1.5em] ${minHeight}`}>
      <div aria-hidden="true" className={step.boxClassName}>
        <Illustration/>
      </div>
      <div className={`flex flex-col gap-[0.875em] ${step.textWidth}`}>
        <h3 className="text-[1.25em] font-bold leading-[1.1] text-primary">{step.title}</h3>
        <p className="text-[0.875em] leading-[1.1] text-[#005542]">{step.text}</p>
      </div>
    </article>
  );
}

function TabFooter({tabId}) {
  if (tabId === "primeiro-acesso") {
    return (
      <>
        <p className="text-base leading-[1.1] lg:max-w-[1030px] lg:text-[32px]">
          Não recebeu o e-mail? Confira o spam ou acesse{" "}
          <a href="https://play.watch.tv.br/ative" target="_blank" rel="noopener noreferrer" className="underline">play.watch.tv.br/ative</a>
          . Se precisar, fale com a Leste.
        </p>
        <a
          href={SUPPORT_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-[#005542] px-6 py-3 text-xl font-bold leading-[1.1] text-white transition hover:brightness-125 lg:px-8 lg:py-[19px] lg:text-2xl"
        >
          Preciso de ajuda
        </a>
      </>
    );
  }

  if (tabId === "assistir-na-tv") {
    return (
      <p className="text-base leading-[1.1] lg:text-[32px]">
        As telas podem variar conforme o modelo da TV. Ainda não ativou sua conta? Veja a aba Primeiro acesso.
      </p>
    );
  }

  return (
    <p className="text-base leading-[1.1] lg:text-[32px]">
      A HBO Max não apareceu na Watch? Confira se o seu plano inclui o acesso ou fale com a Leste.
    </p>
  );
}

export default function LestePlayActivation() {
  const [activeTabId, setActiveTabId] = useState(ACTIVATION_TABS[0].id);
  const activeTab = ACTIVATION_TABS.find((tab) => tab.id === activeTabId);

  return (
    <section id="ativacao" className="relative flex [container-type:inline-size] w-full flex-col items-center gap-8 rounded-b-[40px] bg-[#037258] px-8 py-[60px] text-white lg:gap-10 lg:rounded-b-[80px] lg:px-[100px] lg:py-20">
      <div className="flex flex-col items-center gap-4 text-center lg:gap-8">
        <h2 className="w-[314px] text-[32px] font-bold leading-[1.05] lg:w-auto lg:text-[64px]">Saiba como ativar seu Leste Play</h2>
        <p className="w-[188px] text-base leading-[1.1] lg:w-auto lg:text-[32px]">Escolha uma opção e siga o passo a passo.</p>
      </div>

      <div
        role="tablist"
        aria-label="Como ativar o Leste Play"
        className="flex items-center rounded-full border-[1.12px] border-[rgba(3,255,169,0.55)] bg-[linear-gradient(167.43deg,rgba(1,255,167,0.2)_19.14%,rgba(4,172,132,0)_80.75%)] p-2 lg:gap-8 lg:p-4"
      >
        {ACTIVATION_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`ativacao-aba-${tab.id}`}
              aria-selected={isActive}
              aria-controls="ativacao-passos"
              onClick={() => setActiveTabId(tab.id)}
              className={`cursor-pointer whitespace-nowrap rounded-full px-3 py-[5.65px] text-xs font-bold leading-[1.1] transition lg:px-8 lg:py-[18.7px] lg:text-[26.05px] ${isActive ? "bg-white text-primary drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#dbdbdb] hover:text-[#005542]" : "text-white hover:bg-[#007b60]"}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="ativacao-passos"
        aria-labelledby={`ativacao-aba-${activeTab.id}`}
        className="flex w-full max-w-[1240px] flex-wrap justify-center gap-x-4 gap-y-[10.07px] text-[20.146px] [--u:1.2591px] lg:gap-2 lg:text-base lg:[--u:1px] xl:gap-[calc(8*var(--u))] xl:text-[length:calc(16*var(--u))] xl:[--u:min(1px,calc(100cqw/1240))]"
      >
        {activeTab.steps.map((step) => (
          <StepCard key={step.title} step={step} minHeight={CARD_MIN_HEIGHT[activeTab.id] ?? "min-h-[17.8125em]"}/>
        ))}
      </div>

      <div className="flex w-full max-w-[304px] flex-col items-start gap-8 lg:max-w-[1240px] lg:gap-[60px]">
        <TabFooter tabId={activeTab.id}/>
      </div>
    </section>
  );
}
