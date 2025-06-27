//9. Escreva duas funções:

// paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}


const pares = [["nome", "Maria"], ["idade", 30]];
console.log(paresParaObjeto(pares)); 

const obj = { nome: "Carlos", idade: 25 };
console.log(objetoParaPares(obj));