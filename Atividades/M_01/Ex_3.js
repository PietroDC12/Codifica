// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

// Entrada do usuário
const nota = Number(prompt("Digite sua nota:"));

// Verifica a nota do aluno
if (nota < 6) {
  console.log("Reprovado");
} 
else if(nota >= 6 && nota < 7) {
    console.log("Recuperação");
} 
else {
    console.log("Aprovado");
}
