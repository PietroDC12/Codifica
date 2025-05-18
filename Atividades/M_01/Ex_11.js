// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')()

valor = 0 

for (let num = 5; num >= 1; num--) {
    const novo_valor = Number(prompt("Adicione um valor a soma:"));
    valor = valor + novo_valor
    console.log("A soma está em:",valor);
}
