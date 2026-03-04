const fs = require("fs");

const arquivo = "chamados.json";

function lerChamados() {
  const dados = fs.readFileSync(arquivo);
  return JSON.parse(dados);
}

function salvarChamados(chamados) {
  fs.writeFileSync(arquivo, JSON.stringify(chamados, null, 2));
}

function criarChamado(titulo, descricao) {
  const chamados = lerChamados();

  const novoChamado = {
    id: Date.now(),
    titulo: titulo,
    descricao: descricao,
    status: "aberto"
  };

  chamados.push(novoChamado);
  salvarChamados(chamados);

  console.log("Chamado criado:", novoChamado);
}

criarChamado("Internet caiu", "Cliente sem conexão");