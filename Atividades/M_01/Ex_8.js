// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

// Entrada do usuário
const a = Number(prompt("Valor de A:"));
const b = Number(prompt("Valor de B (Não pode repetir):"));

// retorna o resultado em ordem crescente
if (a > b){
    console.log("O valor", a, "é maior que", b)
}
else if(b > a){
    console.log("O valor", b, "é maior que", a)
}
else {
    console.log("Insira valores corretos")
}