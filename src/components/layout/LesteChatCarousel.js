"use client";

import Image from "next/image";

export default function LesteChatCarousel({ carousel, disabled, onSelect }) {
  if (!carousel.cards.length) return <p className="mt-2 text-xs text-graylight">Nenhum plano disponível no momento.</p>;

  return <div className="mt-3 flex snap-x gap-3 overflow-x-auto overscroll-x-contain pb-2" aria-label="Planos disponíveis">
    {carousel.cards.map((card, position) => <article key={`${card.index}-${position}`} className="w-56 shrink-0 snap-start overflow-hidden rounded-xl border border-graylighter bg-white">
      {card.imageUrl ? <Image unoptimized src={card.imageUrl} alt={`Imagem do plano ${position + 1}`} width={224} height={128} className="h-32 w-full object-cover" /> : null}
      <div className="space-y-3 p-3">
        {card.text ? <p className="whitespace-pre-wrap text-xs leading-5 text-darkgreen">{card.text}</p> : null}
        {card.button?.value ? <button type="button" disabled={disabled} onClick={() => onSelect(card.button.value, card.button.label, true)} className="w-full rounded-lg bg-primary px-3 py-2 text-xs font-bold text-white transition hover:bg-darkgreen disabled:opacity-50">{card.button.label}</button> : null}
      </div>
    </article>)}
  </div>;
}
