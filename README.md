# Leste Telecom

Aplicação web da Leste Telecom construída com Next.js App Router. O projeto reúne páginas institucionais, fluxo de vendas, área corporativa, páginas de suporte/FAQ, Leste Móvel, Leste Clube e APIs usadas pelo frontend.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Zustand
- React Hook Form + Yup/Zod
- MongoDB

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

O ambiente de desenvolvimento roda com Turbopack via `next dev --turbopack`.

## Deploy com PM2

No servidor, instale dependências, gere a build e suba o processo pelo arquivo `ecosystem.config.cjs`:

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs --env production
pm2 save
```

Para manter o projeto ativo após reboot, rode:

```bash
pm2 startup
```

O comando acima imprime uma linha com `sudo ...`; execute essa linha no servidor e depois rode `pm2 save` novamente. Por padrão, a aplicação sobe em `http://localhost:3000`.

## Estrutura principal

```text
src/
  app/               rotas, layouts e endpoints API
  components/        componentes reutilizáveis
  pageComponents/    composição das páginas por domínio
  contexts/          providers globais
  services/          integrações e chamadas de serviço
  hooks/             hooks compartilhados
  lib/               utilitários de infraestrutura e regra de negócio
  models/            modelos de dados
  schemas/           validações
  store/             estado global
  assets/            imagens e ícones
```

## Layout e UI

Os padrões visuais do projeto estão documentados em [layout.md](./layout.md). Esse arquivo deve ser tratado como referencia para:

- containers, espacamentos e responsividade
- cores e tokens de interface
- padrões de inputs, botões, cards e modais
- organização de componentes e convenções de implementação

Antes de criar ou alterar componentes, consulte `layout.md` para manter consistência com o que já existe no código.

## Rotas e Áreas do projeto

Algumas Áreas relevantes:

- `/` home institucional
- `/vendas` fluxo comercial
- `/corporate` Área corporativa
- `/movel` Leste Móvel
- `/faq` central de ajuda
- `/cameras`, `/lesteup`, `/leste-clube`, `/leste-suporte`
- `/api/*` endpoints internos consumidos pelo frontend

## Observações de arquitetura

- O layout global fica em [`src/app/layout.js`](./src/app/layout.js).
- O shell padrão fica em [`src/components/layout/RootShell.js`](./src/components/layout/RootShell.js) e remove header/footer em rotas com layout próprio, como `vendas`, `móvel` e `corporate`.
- Imports internos usam alias `@/`.
- Estilos globais ficam concentrados em `src/app/globals.css` e arquivos pontuais em `src/styles/`.
