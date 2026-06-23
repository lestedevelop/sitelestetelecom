# Layout e Padrões (Tailwind)

Este documento padroniza o layout, espaços, cores e componentes de UI do projeto. Tudo aqui reflete o que já existe no código e deve ser seguido para manter consistência.

## Stack e CSS
- Tailwind CSS v4 configurado em `tailwind.config.js`.
- Import global em `src/app/globals.css` com `@import "tailwindcss";` e `@config "../../tailwind.config.js";`.
- CSS aplicado via `className` nos componentes e páginas.
- CSS global apenas para estilos realmente globais (ex: `src/app/globals.css`, `src/styles/toastify.css`).

## Containers
- Usar `container` do Tailwind (centralizado).
- Config atual: `center: true`, `padding: 2rem` (default), `xl: 0`, `screens.xl: 1280px`.
- Padrão de seção:
```jsx
<section className="w-full bg-light">
  <div className="container py-8 md:py-16">
    ...
  </div>
</section>
```
- Preferir `src/components/layout/Section.js` quando quiser padronizar o wrapper.

## Espacamento (padding e margin)
- Espaço vertical de seção: `py-6`, `py-8`, `py-10`, `py-12`, `py-16`, `py-20`.
- Espaço horizontal interno: `px-6` (headers), `px-8` (forms/cards).
- Gaps e stacks: `gap-4`, `gap-6`, `gap-8`, `space-y-2` (inputs), `space-y-6` (seções).
- Margens frequentes: `mt-6`, `mt-8`, `mt-10`, `mt-12`, `mb-6`.
- Se precisar de tamanho fora da escala, use valores arbitrários (ex: `h-[124px]`) ao invés de tokens não definidos.

## Bordas, raios e sombras
- Inputs: `rounded-md`, `border border-transparent`, `focus:border-primary`.
- Cards: `rounded-xl` ou `rounded-2xl`, `border border-graylighter`.
- AppBar: `rounded-3xl`, `border border-graylighter`, `shadow`.
- Modal: `rounded-2xl`, `shadow-xl`, `ring-1 ring-black/10`.

## Cores (tailwind.config.js)
- `primary`: `#009373`
- `light`: `#F2F2F2`
- `dark`: `#2E2E2E`
- `graylight`: `#6a7282`
- `graylighter`: `#E8EBEA`
- `darkgreen`: `#045441`
- `lightgreen`: `#8fff85`
- `corporate`: `#002019`
- `corporateDark`: `#121212`
- Área admin usa paleta `neutral-*` nativa do Tailwind quando aplicável.

## Padrões de Inputs
Referências: `src/components/Form/FormComponents/Input.js`, `Select.js`, `DateInput.js`.
- Wrapper: `space-y-2`.
- Label: `text-darkgreen font-semibold` e `*` em `text-red-500` quando `required`.
- Campo: `w-full h-12 rounded-md bg-graylighter px-4 outline-none text-darkgreen`.
- Borda: erro `border border-red-500`, normal `border border-transparent`, foco `focus:border-primary`.
- Disabled: `opacity-60 cursor-not-allowed`.
- Mensagem de erro: `text-red-500 text-sm`.

## Padrões de Botões
Referência: `src/components/Buttons/ActionButton.js`.
- Base: `w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-darkgreen`.
- Variações via `className`.

## Cards e Banners
- `CardBanner`: `container bg-primary`, `overflow-hidden`, `md:rounded-3xl`.
- `SectionBanner`: `container`, imagem com `object-cover`, texto em `text-light`.

## Modal
Referência: `src/components/layout/Modal.js`.
- Overlay: `fixed inset-0`.
- Backdrop: `bg-black/50`.
- Painel: `rounded-2xl bg-white shadow-xl ring-1 ring-black/10`.
- Header: `border-b border-black/10`, texto `text-darkgreen`.

## Como aplicar classes Tailwind
- Preferir classes no `className` (pages e components).
- Compor classes via template string, array `join(" ")` ou `tailwind-merge` quando precisa sobrescrever (ex: `Section.js`).
- Uso de `!` (important) apenas quando necessário (ex: `bg-light!`).

## Onde estão os componentes base
- Layout: `src/components/layout/*` (AppBar, Footer, Modal, Section).
- Formulários: `src/components/Form/*` e `src/components/Form/FormComponents/*`.
- Botões: `src/components/Buttons/*`.
- Cards: `src/components/cards/*`.

## Guia para novos componentes (seguir 100% o projeto)
- Nome do arquivo e do componente em PascalCase, com `export default function Nome()`.
- Colocar o componente na pasta correta por domínio:
- `layout` para shell, header, footer, modais e wrappers.
- `Form` para formulários e inputs.
- `cards` para cards e blocos de destaque.
- `Buttons` para botões reutilizáveis.
- Usar `use client` somente se precisar de estado, efeitos, eventos no browser ou hooks do React.
- Usar `className` como ponto principal de estilo, com override via props quando fizer sentido.
- Para merge de classes com override, usar `tailwind-merge` (ex: `Section.js`).
- Preferir reutilizar componentes existentes (Input, Select, DateInput, ActionButton, Section) em vez de recriar estilos.
- Imports internos sempre via alias `@/` (ex: `@/components/...`, `@/assets/...`).
- Imagens e ícones: usar `next/image` e assets de `src/assets` com `alt` descritivo.
- Navegação interna: usar `next/link`.
- Responsivo mobile-first com `md:` e `lg:` quando necessário.
- Estados visuais: `hover:*`, `focus:*`, `disabled:*` sempre que o componente for interativo.
- Evitar CSS global novo; se inevitavel, documentar em `src/app/globals.css`.

## Template base (presentational)
```jsx
export default function ComponentName({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
```

## Template base (com override de classes)
```jsx
import { twMerge } from "tailwind-merge";

export default function ComponentName({ className = "", children, ...props }) {
  return (
    <div className={twMerge("base-classes", className)} {...props}>
      {children}
    </div>
  );
}
```

## Template base (client component)
```jsx
"use client";

import { useState } from "react";

export default function ComponentName({ className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      className={`rounded-xl px-4 py-2 ${className}`}
      onClick={() => setOpen(!open)}
    >
      Toggle
    </button>
  );
}
```

## Checklist rápido para novo componente
- Usa as cores e espacamentos definidos neste documento.
- Usa `container` quando for seção de página.
- Reaproveita Input/Select/DateInput/ActionButton quando aplicável.
- Usa `md:` e `lg:` para responsividade.
- Evita classes não definidas; se precisar, usa valor arbitrário (`h-[124px]`).
- Tem `alt` em imagens e `aria-label` em botões somente com ícone.
