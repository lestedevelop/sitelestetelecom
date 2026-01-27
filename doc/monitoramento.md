# Monitoramento (Next.js App Router)

Este documento descreve **tudo que foi implementado** na área de monitoramento, onde editar e como estender.

## Visão geral
- **Client SDK** captura erros JS, `unhandledrejection`, warnings, falhas de `fetch` e envia para o backend.
- **Ingest API** valida/sanitiza e grava eventos no **MongoDB de monitoramento**.
- **Painel** `/monitoramento` com filtros, lista e **detalhe por evento** (tabs com request/payload/response/etc.).
- **Auth interna** simples por cookie assinado usando `MONITOR_INGEST_SECRET` ou `MONITOR_ADMIN_PASSWORD`.
- **JSON Viewer** usa `react-json-view-lite` + parser tolerante (`jsonic`).

---

## Rotas e telas

### Painel
- **Lista:** `src/app/(admin)/monitoramento/page.js`
  - Filtros: `from`, `to`, `type`, `level`, `route`, `status`, `q`
  - Paginação: `limit` e `page`
  - Onde editar: render da tabela, filtros e query de Mongo.

- **Detalhe:** `src/app/(admin)/monitoramento/[id]/page.js`
  - Carrega evento pelo `_id` do Mongo.
  - Mostra resumo + tabs de dados da request + eventos relacionados.
  - Onde editar: estrutura da tela e seções do resumo.

- **Layout do painel:** `src/app/(admin)/monitoramento/layout.js`
  - Sidebar (largura 120px), header e visual geral.

- **Tabs da requisição:** `src/app/(admin)/monitoramento/RequestTabs.js`
  - Tabs: Request, Payload, Response, Headers, Detalhes.
  - Onde editar: labels/ordem/tabs e conteúdo.

### Auth do painel
- **Login:** `src/app/api/monitor/login/route.js`
  - Recebe `password` e cria cookie `monitor_admin`.
- **Cookie + sessão:** `src/lib/monitoring/adminAuth.js`
  - `ADMIN_COOKIE_NAME`, criação e verificação de sessão.

---

## Client SDK (frontend)

**Arquivo:** `src/monitoring/client.js`

**O que faz**
- `window.onerror` e `unhandledrejection`
- Intercepta `console.error` e `console.warn`
- Intercepta `fetch` para capturar falhas (4xx/5xx e exceptions)
- Envia `request.bodySnippet` (payload) quando possível
- Fila local + retry + rate limit + dedup

**Ponto de inicialização**
- `src/components/layout/RootShell.js` chama `initMonitoring()`

**Onde editar**
- Sampling/rate limit: `sampleRate`, `rateLimit`, `rateWindowMs` no `init()`
- Dedup: `dedupWindowMs`
- Captura de payload: `getRequestBodySnippetAsync()`

---

## Ingest API (backend)

### Endpoint de ingest
- **Arquivo:** `src/app/api/monitor/events/route.js`
- **Rota:** `POST /api/monitor/events`
- **Proteção:** token assinado (`x-monitor-token`) + rate limit por IP
- **Validação:** `zod`
- **Sanitização:** `src/lib/monitoring/sanitize.js`

### Endpoint de token
- **Arquivo:** `src/app/api/monitor/token/route.js`
- **Rota:** `GET /api/monitor/token`
- Emite token curto (5 min) para o client.

---

## MongoDB (monitoramento)

**Conexão**
- `src/lib/mongoMonitor.js`
  - Reutiliza client
  - Cria índices: `timestamp`, `(type+level+timestamp)`, `correlationId`

**Coleção usada**
- `events`

---

## Middleware (correlationId)

**Arquivo:** `src/middleware.js`
- Gera `x-request-id` por request
- Propaga no response

---

## JSON Viewer

**Componente usado nas tabs**
- `src/components/JsonDraculaViewer.js`
  - Usa `react-json-view-lite` com `darkStyles`
  - Parse tolerante via `jsonic` para strings com JSON embutido
  - Parser tenta `JSON.parse` e, se falhar, `Jsonic(...)`

**Onde editar**
- Tema/estilo: `JsonDraculaViewer` (cores e padding)
- Altura e truncamento: props `height` e `maxPreviewChars`
- Parser: `normalizeValue()`

---

## Variáveis de ambiente

Obrigatórias:
- `MONGODB_MONITOR_URI`
- `MONITOR_INGEST_SECRET`

Recomendadas:
- `APP_ENV`
- `APP_VERSION`
- `APP_ORIGIN` (CORS)
- `NEXT_PUBLIC_APP_ENV`
- `NEXT_PUBLIC_APP_VERSION`

---

## Como editar / estender

### 1) Adicionar novos tipos de evento
- Atualize enum em: `src/app/api/monitor/events/route.js` (schema Zod)
- (Opcional) Ajuste UI no painel (`page.js`) para novos filtros.

### 2) Adicionar campos ao payload
- Atualize schema Zod em `src/app/api/monitor/events/route.js`
- Atualize captura no client em `src/monitoring/client.js`

### 3) Adicionar nova aba no detalhe
- `src/app/(admin)/monitoramento/RequestTabs.js`
- Criar novo bloco dentro do `active === ...`

### 4) Ajustar sanitização (PII)
- `src/lib/monitoring/sanitize.js`

---

## Pontos principais para edição rápida

- **Tema do painel:** `src/app/(admin)/monitoramento/layout.js`
- **Lista + filtros:** `src/app/(admin)/monitoramento/page.js`
- **Detalhe:** `src/app/(admin)/monitoramento/[id]/page.js`
- **Tabs (payload/response):** `src/app/(admin)/monitoramento/RequestTabs.js`
- **Viewer JSON:** `src/components/JsonDraculaViewer.js`
- **Ingest API:** `src/app/api/monitor/events/route.js`
- **Client SDK:** `src/monitoring/client.js`

