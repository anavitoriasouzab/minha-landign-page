# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Preferências do projeto

- Nunca usar travessões (— ou –) em nenhum texto. Preferir vírgula, dois pontos ou frases separadas.
- Copy em pt-BR, voz de "eu" para "você", tom confiante e quieto, sem hype e sem emoji.
- Não citar quantidade de projetos publicados. Falar apenas em "principais projetos".
- Direção visual: dark/violeta do design system anav.souzab v2 (noite, violeta, lavanda, névoa, bruma; amarelo só em detalhes). Cores vêm só dos tokens em _ds/*/tokens/colors.css; nunca colocar hex fixo no index.html ou 404.html. Para trocar a paleta, editar apenas esse arquivo.
- Priorizar linguagem minimalista, objetiva e clara, compreensível por todos;

## Comandos

Não há package.json, build, lint nem testes. O site é estático e o deploy é pela Cloudflare (Workers com arquivos estáticos, config em `wrangler.jsonc`).

- Servir localmente: `npx wrangler dev` (roda o `worker/index.js` na frente dos arquivos da raiz). Abrir o `index.html` direto no navegador também funciona para ver o layout, mas sem os cabeçalhos do worker.
- Publicar: `npx wrangler deploy`.

## Arquitetura

- Site de uma página: `index.html` (+ `404.html`), domínio `anavitoriaweb.com.br`. A raiz do repositório inteira é o diretório de assets.
- `.assetsignore` define o que NÃO vai ao ar (uploads, capturas, zips, readme e manifest do `_ds`, worker, CLAUDE.md). Arquivo novo que não deve ser público precisa entrar ali; `.gitignore` é separado.
- `worker/index.js` roda antes dos assets (`run_worker_first`): redireciona `www.` para o domínio principal (301) e define os cabeçalhos de segurança em toda resposta. Mudanças de CSP, HSTS etc. são feitas lá, não em meta tags.
- `index.html` usa um runtime de componentes próprio: o corpo fica em `<x-dc>` com `<helmet>` (estilos e `ds-base.js`), e a lógica em `<script type="text/x-dc">` como `class Component extends DCLogic` (canvas da constelação do hero, barra de progresso, header). `support.js` é esse runtime, GERADO ("do not edit", vem de `dc-runtime`, que não está neste repositório): não editar à mão.
- Cadeia de cores: `_ds/anav-souzab-design-system-*/tokens/colors.css` (hex base) → `site-colors.css` (papéis do site como `--brand`, `--lavender`, `--ink-0`, via `var()` e `color-mix`) → `index.html`/`404.html`. A única cor fixa permitida fora dos tokens é `--proj-cetap` em `site-colors.css`, identidade do cliente no portfólio.
- `ds-base.js` injeta no runtime os CSS de tokens do design system e `_ds_bundle.js`. O caminho `base` dentro dele aponta para a pasta `_ds/<nome>`; se a pasta for renomeada ou atualizada, editar essa linha.
- SEO e IA ficam em arquivos da raiz que precisam acompanhar mudanças de conteúdo ou URL: JSON-LD no `<head>` do `index.html`, `canonical`, `sitemap.xml`, `robots.txt`, `llms.txt` e imagem de compartilhamento em `assets/og/`.
- Imagens da marca em `assets/marca/` (SVG + PNGs gerados), fotos em `assets/photos/`, projetos do portfólio em `assets/projects/` (cada projeto tem versão `-desktop.jpg` e `-celular.jpg`).
- Ao adicionar ou alterar um projeto do portfólio, atualizar também `llms.txt`, o JSON-LD do `index.html` e, se a URL mudar, o `sitemap.xml`.
- Material de trabalho na raiz, fora do ar e sem relação com o site: `atualização/`, `atualização.zip`, `Avaliação e refinamento de logo.zip` e `uploads/`. Não editar nem publicar; já estão no `.assetsignore`.
