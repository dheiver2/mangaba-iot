# Mangaba IoT AI

Site institucional do braço **Mangaba IoT AI** — colocamos IA em dispositivos IoT **prontos** (catálogo de SKUs homologados) ou **sob encomenda** (engenharia eletrônica + firmware + treino de modelo + certificação).

Página única, sem build, pronta para **GitHub Pages**.

## Stack

- HTML + CSS + JS vanilla (zero dependências, zero build)
- Tipografia: Inter, JetBrains Mono, Source Serif 4 (Google Fonts)
- Design system Mangaba (warm cream + terracota `#D97757`)
- Dark mode sem flash (script inline + `localStorage`)
- `IntersectionObserver` para reveals
- Acessibilidade: skip link, foco visível com `--ring`, `prefers-reduced-motion`

## Estrutura

```
mangaba-iot/
├── index.html
├── styles.css
├── app.js
├── favicon.svg
├── .nojekyll
└── .github/workflows/pages.yml
```

## Rodar localmente

```bash
python3 -m http.server 8080
# ou
npx serve .
```

Abra `http://localhost:8080`.

## Publicar

1. `git init && git add . && git commit -m "init"`
2. Crie o repositório no GitHub e faça push.
3. **Settings → Pages → Source: GitHub Actions** (o workflow já está em `.github/workflows/pages.yml`).
4. Em ~1 min a página fica disponível em `https://<user>.github.io/<repo>/`.

Para usar domínio próprio, adicione um arquivo `CNAME` na raiz com o host (ex.: `mangaba-iot.online`).

---

© 2026 Mangaba.

