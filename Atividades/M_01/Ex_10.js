// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

// Entrada do usuário
const valor = Number(prompt("Valor a ser exibido 10 vezes:"));

// impressão do mesmo valor 10 vezes
for (let num = 10; num >= 1; num--) {
  console.log(valor);
}
