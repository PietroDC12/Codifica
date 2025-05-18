// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) 
// com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()

const idade = Number(prompt("Digite a idade:"));

// Verifica a idade e retorna uma resposta
if (idade <= 8) {
  console.log("É uma criança");
}
if (idade > 8 && idade <= 18) {
    console.log("É um adolescente");
}
if (idade > 18 && idade <= 60) {
    console.log("É um adulto");
}
if (idade > 60) {
    console.log("É um adulto");
}
