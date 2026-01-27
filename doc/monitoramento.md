# Monitoramento (Next.js App Router)

Este documento descreve tudo que foi implementado na area de monitoramento, onde editar e como estender.

## Visao geral
- Client SDK captura erros JS, unhandledrejection, warnings, falhas de fetch, navegacoes e tela branca.
- Ingest API valida/sanitiza e grava eventos no MongoDB de monitoramento.
- Painel /monitoramento com filtros, lista e detalhe por evento (tabs com request/payload/response/etc).
- Auth interna simples por cookie assinado usando MONITOR_INGEST_SECRET ou MONITOR_ADMIN_PASSWORD.
- JSON Viewer usa react-json-view-lite + parser tolerante (jsonic).

---

## Rotas e telas

### Painel
- Lista: src/app/(admin)/monitoramento/page.js
  - Filtros: from, to, type, level, route, status, q, appVersion, environment
  - Paginacao: limit e page
  - Onde editar: render da tabela, filtros e query de Mongo.

- Overview: src/app/(admin)/monitoramento/overview/page.js
  - Cards de resumo + grafico de volume por hora + listas por tipo/nivel/rotas + ultimos erros.
  - Onde editar: layout e cards.

- Detalhe: src/app/(admin)/monitoramento/[id]/page.js
  - Carrega evento pelo _id do Mongo.
  - Mostra resumo + tabs de dados da request + eventos relacionados.
  - Onde editar: estrutura da tela e secoes do resumo.

- Layout do painel: src/app/(admin)/monitoramento/layout.js
  - Sidebar, header e visual geral do painel.

- Tabs da requisicao: src/app/(admin)/monitoramento/RequestTabs.js
  - Tabs: Request, Payload, Response, Headers, Detalhes.
  - Onde editar: labels/ordem/tabs e conteudo.

### Componentes de UI (monitoramento)
- SummaryCard: src/pageComponents/monitoramento/SummaryCard.js
- FilterBar: src/pageComponents/monitoramento/FilterBar.js
- EventsTable: src/pageComponents/monitoramento/EventsTable.js
- Pagination: src/pageComponents/monitoramento/Pagination.js
- Helpers/badges: src/pageComponents/monitoramento/utils.js
- Overview data: src/pageComponents/monitoramento/overviewData.js
- Overview components: src/pageComponents/monitoramento/overviewComponents.js

### Auth do painel
- Login: src/app/api/monitor/login/route.js
  - Recebe password e cria cookie monitor_admin.
- Cookie + sessao: src/lib/monitoring/adminAuth.js
  - ADMIN_COOKIE_NAME, criacao e verificacao de sessao.

---

## Client SDK (frontend)

Arquivo: src/monitoring/client.js

O que faz
- window.onerror e unhandledrejection
- Intercepta console.error e console.warn
- Intercepta fetch para capturar falhas (4xx/5xx e exceptions)
- Navegacoes (pushState/replaceState/popstate)
- Tela branca: heuristica apos timeout
- Web Vitals basicos (LCP/CLS/FID) + long tasks
- Envia request.bodySnippet (payload) quando possivel
- Fila local + retry + rate limit + dedup

Ponto de inicializacao
- src/components/layout/RootShell.js chama initMonitoring()

Onde editar
- Sampling/rate limit: sampleRate, rateLimit, rateWindowMs no init()
- Dedup: dedupWindowMs
- Captura de payload: getRequestBodySnippetAsync()
- Tela branca: blankScreenDelayMs + data-monitor-ready no root
- Rotas ignoradas: ignoreRoutes (ex: ["/monitoramento"])
- Web vitals: webVitalSampleRate e webVitalDedupWindowMs

---

## Ingest API (backend)

Endpoint de ingest
- Arquivo: src/app/api/monitor/events/route.js
- Rota: POST /api/monitor/events
- Protecao: token assinado (x-monitor-token) + rate limit por IP
- Validacao: zod
- Sanitizacao: src/lib/monitoring/sanitize.js

Endpoint de token
- Arquivo: src/app/api/monitor/token/route.js
- Rota: GET /api/monitor/token
- Emite token curto (5 min) para o client.

---

## MongoDB (monitoramento)

Conexao
- src/lib/mongoMonitor.js
  - Reutiliza client
  - Cria indices: timestamp, (type+level+timestamp), correlationId

Colecao usada
- events

---

## Middleware (correlationId)

Arquivo: src/middleware.js
- Gera x-request-id por request
- Propaga no response

---

## JSON Viewer

Componente usado nas tabs
- src/components/JsonDraculaViewer.js
  - Usa react-json-view-lite com darkStyles
  - Parse tolerante via jsonic para strings com JSON embutido
  - Parser tenta JSON.parse e, se falhar, Jsonic(...)

Onde editar
- Tema/estilo: JsonDraculaViewer (cores e padding)
- Altura e truncamento: props height e maxPreviewChars
- Parser: normalizeValue()

---

## Variaveis de ambiente

Obrigatorias:
- MONGODB_MONITOR_URI
- MONITOR_INGEST_SECRET

Recomendadas:
- APP_ENV
- APP_VERSION
- APP_ORIGIN (CORS)
- NEXT_PUBLIC_APP_ENV
- NEXT_PUBLIC_APP_VERSION

---

## Como editar / estender

1) Adicionar novos tipos de evento
- Atualize enum em: src/app/api/monitor/events/route.js (schema Zod)
- Opcional: ajuste UI no painel (page.js) para novos filtros.

2) Adicionar campos ao payload
- Atualize schema Zod em: src/app/api/monitor/events/route.js
- Atualize captura no client em: src/monitoring/client.js

3) Adicionar nova aba no detalhe
- src/app/(admin)/monitoramento/RequestTabs.js
- Criar novo bloco dentro do active === ...

4) Ajustar sanitizacao (PII)
- src/lib/monitoring/sanitize.js

---

## Pontos principais para edicao rapida

- Tema do painel: src/app/(admin)/monitoramento/layout.js
- Lista + filtros: src/app/(admin)/monitoramento/page.js
- Overview: src/app/(admin)/monitoramento/overview/page.js
- Detalhe: src/app/(admin)/monitoramento/[id]/page.js
- Tabs (payload/response): src/app/(admin)/monitoramento/RequestTabs.js
- Viewer JSON: src/components/JsonDraculaViewer.js
- Ingest API: src/app/api/monitor/events/route.js
- Client SDK: src/monitoring/client.js

---

## Como testar localmente (rapido)

1) Configure .env.local com:
   - MONGODB_MONITOR_URI
   - MONITOR_INGEST_SECRET
   - MONITOR_ADMIN_PASSWORD (ou use o mesmo secret)
   - NEXT_PUBLIC_APP_ENV e NEXT_PUBLIC_APP_VERSION (opcional)
2) Abra o app e acesse /monitoramento.
3) Gere um erro no console:
   - throw new Error("Monitor test");
4) Faca uma requisicao falha (ex: fetch para 404).
5) Volte ao painel e confirme os eventos na lista.

Teste de tela branca
- Remova temporariamente a renderizacao do root, recarregue e aguarde o timeout.

Teste de web vitals
- Recarregue a pagina e verifique eventos web_vital (LCP/CLS/FID).
