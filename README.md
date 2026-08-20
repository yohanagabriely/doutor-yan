<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Site do Dr. Yan Guilherme

## Run Locally

**Pré-requisito:** Node.js


1. Instale as dependências:
   `npm install`
2. Inicie o app:
   `npm run dev`

## Publicar no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica o site automaticamente após cada push na branch `main` ou `master`.

1. Crie um repositório no GitHub e envie este projeto para ele.
2. No repositório, abra **Settings > Pages**.
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.
4. Aguarde a execução da Action **Deploy to GitHub Pages**.

Abra o endereço exibido na Action, normalmente `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`.
Não abra o arquivo `index.html` pela aba de arquivos do GitHub: ele é o ponto de entrada do build e precisa ser servido junto com os arquivos JavaScript e CSS gerados em `dist`.
# doutor-yan
