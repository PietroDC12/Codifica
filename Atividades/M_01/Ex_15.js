// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let a = 0;
let b = 1;

console.log("Sequência de Fibonacci (10 primeiros números):");

// soma e imprime os valores seguindo a sequencia de fibonacci até o décimo valor
for (let i = 0; i < 10; i++) {
  console.log(a);
  let soma = a + b;
  a = b;
  b = soma;
}