module.exports = {
  branches: ['main'], // Ramo onde as versões serão geradas
  plugins: [
    '@semantic-release/commit-analyzer', // Analisa os commits e determina o tipo de versão
    '@semantic-release/release-notes-generator', // Gera notas de lançamento com base nos commits
    '@semantic-release/changelog', // Gera um arquivo CHANGELOG.md
    '@semantic-release/npm', // Atualiza o número da versão no package.json
    '@semantic-release/git', // Commita os arquivos alterados e cria uma tag de versão no Git
  ],
  "github-token": "${GH_TOKEN}"
};
