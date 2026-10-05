# Redirecionamento Nginx — leste.com.br

## Objetivo

Redirecionar os domínios:

- `leste.com.br`
- `www.leste.com.br`

Para `https://www.lestetelecom.com.br`, preservando as rotas:

| Origem | Destino |
|---|---|
| `/` | `/` |
| `/movel` | `/movel` |
| `/cameras` | `/cameras` |
| `/up` | `/lesteup` |
| `/ultra` | `/ultra` |
| `/pme` | `/pme` |
| `/corporate` | `/corporate` |

## Servidor

- IP: `186.211.32.107`
- Sistema: Fedora Linux 43 Server
- Nginx: `1.30.1`
- Configuração principal: `/etc/nginx/nginx.conf`
- Configuração do redirecionamento: `/etc/nginx/conf.d/leste-redirect.conf`

## Configuração padrão restaurada

O redirecionamento HTTP do domínio novo foi corrigido para preservar a rota:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name lestetelecom.com.br www.lestetelecom.com.br;

    location / {
        return 301 https://lestetelecom.com.br$request_uri;
    }

    include /etc/nginx/default.d/*.conf;
}
```

O bloco HTTPS existente encaminha o site para a aplicação Node.js em:

```nginx
proxy_pass http://localhost:3000;
```

## Redirecionamento HTTP aplicado

Conteúdo de `/etc/nginx/conf.d/leste-redirect.conf`:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name leste.com.br www.leste.com.br;

    # Exceção: /up vira /lesteup
    location = /up {
        return 301 https://www.lestetelecom.com.br/lesteup$is_args$args;
    }

    # Todas as outras rotas são preservadas
    location / {
        return 301 https://www.lestetelecom.com.br$request_uri;
    }
}
```

## Testes realizados

Os seguintes testes retornaram `HTTP/1.1 301 Moved Permanently` corretamente:

```bash
curl -I -H "Host: www.leste.com.br" http://127.0.0.1/
curl -I -H "Host: www.leste.com.br" http://127.0.0.1/movel
curl -I -H "Host: www.leste.com.br" http://127.0.0.1/up
curl -I -H "Host: www.leste.com.br" http://127.0.0.1/ultra
```

Resultados:

```text
/       -> https://www.lestetelecom.com.br/
/movel  -> https://www.lestetelecom.com.br/movel
/up     -> https://www.lestetelecom.com.br/lesteup
/ultra  -> https://www.lestetelecom.com.br/ultra
```

## Pendência de HTTPS

O certificado instalado atualmente é:

```text
CN: *.lestetelecom.com.br
SAN: *.lestetelecom.com.br, lestetelecom.com.br
Emissor: Go Daddy Secure Certificate Authority - G2
Validade: 06/07/2026 até 04/10/2026
```

Esse certificado **não cobre**:

```text
leste.com.br
www.leste.com.br
```

Por isso, o acesso direto a `https://leste.com.br` apresenta:

```text
SSL: no alternative certificate subject name matches target hostname 'leste.com.br'
```

O redirecionamento HTTP está funcionando. O HTTPS do domínio antigo somente poderá ser configurado depois que a TIC disponibilizar um certificado válido para os dois nomes.

## Solicitação à TIC

```text
Prezados,

@Alessandro Mello dos Santos Junior

Solicito o certificado SSL para os domínios leste.com.br e www.leste.com.br.

Atenciosamente,
```

## Próximos passos

1. Receber da TIC o certificado para `leste.com.br` e `www.leste.com.br`.
2. Não compartilhar a chave privada pelo chat.
3. Identificar os caminhos do certificado, da chave privada e da cadeia intermediária no servidor.
4. Adicionar um bloco `server` na porta 443 em `/etc/nginx/conf.d/leste-redirect.conf`.
5. Executar `sudo nginx -t`.
6. Recarregar com `sudo systemctl reload nginx` somente se o teste for bem-sucedido.
7. Testar todas as rotas em HTTP e HTTPS.

