// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

// Entrada do usuário
const qtd = Number(prompt("Quantidade de maçãs que deseja:"));

// Verifica o valor de entrada e realiza a conta conforme as instruções
if (qtd < 12) {
    valor = qtd * 0.3
  console.log("Sua compra de maçãs é no valor de: ", valor.toFixed(2));
}
else{
    valor = qtd * 0.25
    console.log("Sua compra de maçãs é no valor de: ", valor.toFixed(2));
}