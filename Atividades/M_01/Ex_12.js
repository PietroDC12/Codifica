// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário
//  (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

// entrada do usuário
const numero = Number(prompt("Digite um número para ver a tabuada: "));

console.log('\nTabuada do', numero ,':\n');

// for que imprime a tabuada até 10
for (let i = 1; i <= 10; i++) {
  console.log(numero, ' x ', i  , '=', numero * i);
}