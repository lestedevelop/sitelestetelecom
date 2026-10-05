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

## Variáveis de ambiente

Os arquivos `.env` e `.env.local` não são versionados. Em desenvolvimento, o `.env.local` tem precedência sobre o `.env`. Após alterar qualquer variável, gere uma nova build e reinicie o processo, pois as variáveis `NEXT_PUBLIC_*` são incorporadas ao JavaScript durante o build.

Nunca envie os arquivos de ambiente pelo Git nem inclua seus valores reais neste README. Configure as seguintes variáveis diretamente em cada servidor:

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `CORE_API_URL` | Sim | URL base da Core API usada por FAQ, viabilidade, autenticação do atendimento e sincronização da Leste Play. Não inclua uma rota específica no final. |
| `INSTITUCIONAL_KEY` | Sim | Chave da aplicação institucional enviada no header `institucionalsessionid` para autenticar chamadas à Core API. É secreta e só deve existir no servidor. |
| `CHAT_PUBLIC_ID` | Não | Identificador do fluxo do chatbot. O padrão é `clone2-capta`; use, por exemplo, `vendas-web` para o fluxo de vendas. |
| `CHAT_API_URL` | Não | URL base server-side da API pública do chatbot. Se não for definida, a aplicação usa o endpoint padrão configurado no código. Prefira esta variável à versão pública. |
| `NEXT_PUBLIC_CHAT_API_URL` | Não | Alternativa pública para `CHAT_API_URL`. Só é usada quando `CHAT_API_URL` não está definida. Por ter o prefixo `NEXT_PUBLIC_`, seu valor pode aparecer no bundle do navegador. |
| `NEXT_PUBLIC_CHAT_PUBLIC_ID` | Não | Alternativa pública para `CHAT_PUBLIC_ID`. Só é usada quando `CHAT_PUBLIC_ID` não está definida. |
| `NEXT_PUBLIC_CHAT_SOCKET_URL` | Não | Endereço do Socket.IO usado pelo chat em tempo real. Sem ela, é usado o endpoint padrão configurado no código. |
| `NEXT_PUBLIC_SHOW_WHATSAPP_BUTTON` | Não | Controla a opção do WhatsApp no widget. Apenas o texto `false` a esconde; ausente ou qualquer outro valor a exibe. |
| `NEXT_PUBLIC_SHOW_CHATBOT_BUTTON` | Não | Controla a opção do chatbot. Apenas o texto `false` a esconde; ausente ou qualquer outro valor a exibe. Se as duas opções forem ocultadas, o widget inteiro desaparece. |
| `IPLOCATE_API_KEY` | Sim | Chave principal do IPLocate, usada para descobrir a cidade pelo IP no fluxo comercial. |
| `IPLOCATE_API_KEY_BACKUP` | Não | Segunda chave do IPLocate, tentada quando a principal retorna erro de autenticação ou limite de requisições. |
| `SITE_LOCK_ENABLED` | Não | Quando é diferente de `false`, restringe o site às rotas liberadas e redireciona as demais. Defina explicitamente como `false` para manter todo o site acessível. |
| `SITE_LOCK_REDIRECT_PATH` | Não | Caminho de destino do bloqueio geral. O padrão é `/vendas`. |
| `SITE_LOCK_ALLOWED_ROUTES` | Não | Rotas adicionais que continuam acessíveis durante o bloqueio geral, separadas por vírgula. Um `*` no final libera o prefixo, por exemplo: `/,/faq/*,/corporate/*,/viabilidade`. As rotas de vendas e a API de vendas já são liberadas pelo código. |
| `VENDAS_LOCK_ENABLED` | Não | Quando tem exatamente o valor `true`, faz as rotas de vendas responderem com HTTP `404`. O padrão é desativado. |
| `VENDAS_LOCK_ROUTES` | Não | Rotas adicionais de vendas que devem ser bloqueadas, separadas por vírgula. Aceita `*` no final para representar um prefixo. |
| `NEXT_PUBLIC_SHOW_TEST_BANNERS` | Não | Quando tem exatamente o valor `true`, exibe banners marcados como teste também em produção. Em desenvolvimento eles já são exibidos. |
| `API_BASE_URL` | Não | URL alternativa usada somente pela sincronização dos canais da Leste Play. Quando ausente, essa rotina usa `CORE_API_URL`. |
| `LESTEPLAY_CHANNELS_SYNC_INTERVAL` | Não | Intervalo da sincronização dos canais da Leste Play, em milissegundos. O padrão é `300000` (5 minutos). |
| `LESTEPLAY_CHANNELS_IMAGE_DIRECTORY` | Não | Diretório onde as imagens dos canais são armazenadas. O padrão é `public/images/lesteplay/channels` dentro do projeto. |
| `LESTEPLAY_CHANNELS_SNAPSHOT_PATH` | Não | Caminho do snapshot JSON dos canais. O padrão é `cache/lesteplay-channels.json` dentro do projeto. |

`NODE_ENV`, `PORT` e `NEXT_RUNTIME` são variáveis de infraestrutura gerenciadas pelo Next.js/PM2 e não precisam ser adicionadas manualmente ao `.env`. O `ecosystem.config.cjs` já inicia a aplicação em produção na porta `3000`.

As antigas variáveis de monitoramento (`MONGODB_MONITOR_URI`, `MONITOR_INGEST_SECRET`, `NEXT_PUBLIC_APP_ENV`, `NEXT_PUBLIC_APP_VERSION`, `APP_ENV`, `APP_VERSION` e `APP_ORIGIN`) não são mais utilizadas e não precisam ser configuradas.

Para testar outro fluxo do bot, altere `CHAT_PUBLIC_ID` e reinicie o Next. Os fluxos `clone2-capta` e `vendas-web` usam identificação por CPF e código antes do bot; somente `clone2-capta` recebe as mensagens automáticas de entrada. O histórico local é separado por fluxo e modo de identificação.

## Deploy

Antes de publicar, confirme que o `.env` do servidor contém os valores corretos para aquele ambiente. Se a build falhar, não reinicie o PM2: mantenha a versão que já está em execução e corrija o erro primeiro.

### Site institucional (Git)

Acesse a VM e entre no diretório `/home/alessandro_mello/sitelestetelecom`. No servidor, o prompt deve ficar semelhante a `root@site-institucional:/home/alessandro_mello/sitelestetelecom#`.

Execute:

```bash
git pull origin main
npm run build
pm2 restart 0
```

Isso atualiza o código com a branch `main`, gera uma nova build de produção e reinicia o processo de ID `0` no PM2.

Se o `package.json` ou o `package-lock.json` tiver mudado, instale as dependências antes da build:

```bash
git pull origin main
npm ci
npm run build
pm2 restart 0
```

### Site de vendas (FTP)

O servidor do site de vendas não possui o repositório Git. Publique os arquivos atualizados por FTP no diretório da aplicação. Não envie arquivos locais de ambiente, `node_modules`, `.next`, logs ou a pasta `.git`; preserve o `.env` que já está configurado no servidor.

Depois do upload, acesse o servidor, entre no diretório da aplicação e execute:

```bash
npm run build
pm2 restart 0
```

Se `package.json` ou `package-lock.json` tiver sido alterado no upload, execute antes:

```bash
npm ci
```

O `pm2 restart 0` pressupõe que a aplicação continua registrada com o ID `0`. Confirme com `pm2 list` caso o processo não reinicie ou o ID tenha mudado. Para acompanhar a inicialização após o deploy, use `pm2 logs 0 --lines 100`.

### Primeira configuração do PM2

Estes comandos só são necessários ao configurar um servidor novo:

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup
```

O `pm2 startup` imprime uma linha com `sudo ...`; execute essa linha no servidor e rode `pm2 save` novamente. Por padrão, a aplicação sobe em `http://localhost:3000`.

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
