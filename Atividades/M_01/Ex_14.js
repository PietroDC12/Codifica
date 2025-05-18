// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();

// entrada do usuário
const numero = Number(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

// é feito o cálculo fatorial e imprime na tela o resultado
if (numero < 0) {
  console.log("Fatorial não existe para números negativos.");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log("O fatorial de", numero, "é", fatorial);
}