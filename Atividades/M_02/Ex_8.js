//8. Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um
// cliente e o valor é a soma de todos os seus total.

function totalPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

// Exemplo de uso:
const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 150 },
  { cliente: "Paulo", total: 50 },
  { cliente: "Ana", total: 30 },
  { cliente: "Maria", total: 10 }
];

console.log(totalPorCliente(vendas));