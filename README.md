# Wired House — Site de Sistemas de Wired (Habbo)

Site para divulgar sistemas de wired (catálogo + portfólio) e consultar jogadores do Habbo BR
usando a [API pública do Habbo](https://www.habbo.com.br/api/public), direto do navegador (sem backend).

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview   # para conferir o build localmente
```

## Como editar o conteúdo do site

Todo o conteúdo "seu" (não vindo da API do Habbo) fica em `src/data/`:

- **`src/data/site.js`** — nome do site, tagline, nick/quarto no Habbo, grupo oficial (`habboGroup`), parceira de criação (`partner`) e links de contato (Discord, WhatsApp).
- **`src/data/services.js`** — catálogo de sistemas de wired oferecidos. Cada item tem `description` (resumo do card), `longDescription`, `scenario`, `howItWorks` e `tags`/`price`, usados na página de detalhe `/catalogo/{id}`. Categorias ficam no array `categories`.
- **`src/data/portfolio.js`** — projetos já entregues, mostrados na página `/portfolio`. Preencha `image` com a URL de um print do quarto (pode hospedar no Imgur, por exemplo) e `roomUrl` com o link do quarto no Habbo, se quiser.

Depois de editar qualquer arquivo em `src/data/`, salve e o site atualiza sozinho (`npm run dev` já tem hot-reload).

## Conta conectada e grupo

Qualquer visitante pode "conectar" o nick dele pelo card na Home (ou pelo botão "Conectar" no menu). Depois de conectado:

- O menu mostra o mini avatar + nick dele em todas as páginas.
- O site verifica se ele é membro do grupo definido em `site.habboGroup.id` e exibe um selo de "Membro" ou "Ainda não é membro".
- O nick fica salvo no navegador do visitante (`localStorage`), então ele continua "conectado" nas próximas visitas.

Pra trocar o grupo checado, edite `habboGroup` em `src/data/site.js` com o `id`/`badgeCode` do grupo desejado (dá pra pegar via `https://www.habbo.com.br/api/public/users/{uniqueId}/profile`, campo `groups`).

## Busca de jogador

A página `/buscar` usa a API pública do Habbo BR para buscar por **nick exato** (a API não suporta busca parcial) e mostra:

- Avatar, missão (motto), nível, estrelas-gema, data de entrada
- Emblemas, grupos, quartos públicos e amigos (só quando o jogador não deixou o perfil privado)

Toda a lógica de chamadas está em `src/api/habboApi.js` — se o Habbo mudar algum endpoint no futuro, é só ajustar ali.

## Publicando o site (deploy)

Este é um site estático (`npm run build` gera a pasta `dist/`). Algumas opções gratuitas:

- **Vercel**: importe o repositório em [vercel.com](https://vercel.com), ele detecta o Vite automaticamente.
- **Netlify**: `npm run build` e arraste a pasta `dist/` em [app.netlify.com/drop](https://app.netlify.com/drop), ou conecte o repositório Git.
- **Cloudflare Pages / GitHub Pages**: também funcionam com o build padrão do Vite (comando de build `npm run build`, pasta de saída `dist`).

## Aviso

Este site consome a API pública do Habbo apenas para exibir dados de jogadores; não é afiliado à Sulake/Habbo.
