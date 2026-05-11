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

No servidor, instale dependencias, gere a build e suba o processo pelo arquivo `ecosystem.config.cjs`:

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs --env production
pm2 save
```

Para manter o projeto ativo apos reboot, rode:

```bash
pm2 startup
```

O comando acima imprime uma linha com `sudo ...`; execute essa linha no servidor e depois rode `pm2 save` novamente. Por padrao, a aplicacao sobe em `http://localhost:3000`.

## Estrutura principal

```text
src/
  app/               rotas, layouts e endpoints API
  components/        componentes reutilizaveis
  pageComponents/    composicao das paginas por dominio
  contexts/          providers globais
  services/          integracoes e chamadas de servico
  hooks/             hooks compartilhados
  lib/               utilitarios de infraestrutura e regra de negocio
  models/            modelos de dados
  schemas/           validacoes
  store/             estado global
  assets/            imagens e icones
```

## Layout e UI

Os padroes visuais do projeto estao documentados em [layout.md](./layout.md). Esse arquivo deve ser tratado como referencia para:

- containers, espacamentos e responsividade
- cores e tokens de interface
- padroes de inputs, botoes, cards e modais
- organizacao de componentes e convencoes de implementacao

Antes de criar ou alterar componentes, consulte `layout.md` para manter consistencia com o que ja existe no codigo.

## Rotas e areas do projeto

Algumas areas relevantes:

- `/` home institucional
- `/vendas` fluxo comercial
- `/corporate` area corporativa
- `/movel` Leste Movel
- `/faq` central de ajuda
- `/cameras`, `/lesteup`, `/leste-clube`, `/leste-suporte`
- `/api/*` endpoints internos consumidos pelo frontend

## Observacoes de arquitetura

- O layout global fica em [`src/app/layout.js`](./src/app/layout.js).
- O shell padrao fica em [`src/components/layout/RootShell.js`](./src/components/layout/RootShell.js) e remove header/footer em rotas com layout proprio, como `vendas`, `movel` e `corporate`.
- Imports internos usam alias `@/`.
- Estilos globais ficam concentrados em `src/app/globals.css` e arquivos pontuais em `src/styles/`.
