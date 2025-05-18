// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a 
// categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')()

// Entrada do usuário
const peso = Number(prompt("Insira seu peso em KG:"));
const altura = Number(prompt("Insira sua altura em metros:"));

altura_quad = altura * altura 

calc_imc = peso / altura_quad 

// Verifica a idade e retorna uma resposta
if (calc_imc < 18.5) {
  console.log("Abaixo do peso, seu valor de IMC é: ", calc_imc.toFixed(2));
}
else if (calc_imc >= 18.5 && calc_imc <= 24.99) {
    console.log("Peso normal, seu valor de IMC é: ", calc_imc.toFixed(2));
}
else if (calc_imc >= 25 && calc_imc <= 29.99) {
    console.log("Sobrepeso, seu valor de IMC é: ", calc_imc.toFixed(2));
}
else if (calc_imc > 30) {
    console.log("Obesidade, seu valor de IMC é: ", calc_imc.toFixed(2));
}
else{
    console.log("Valor errado!")
}