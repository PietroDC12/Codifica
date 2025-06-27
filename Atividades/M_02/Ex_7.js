//7. Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, 
// ordenados por preço crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const produtos = [
  { nome: "Caneta", preco: 2 },
  { nome: "Lápis", preco: 1 },
  { nome: "Caderno", preco: 10 },
  { nome: "Agenda", preco: 7 },
];

console.log(nomesOrdenadosPorPreco(produtos));