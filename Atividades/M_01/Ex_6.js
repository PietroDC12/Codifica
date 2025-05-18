// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos 
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

// entradas do usuário
const a = Number(prompt("Digite o valor de A: "));
const b = Number(prompt("Digite o valor de B: "));
const c = Number(prompt("Digite o valor de C: "));

// ifs para verificar qual é o tipo de triângulo
if (a === b && b === c){
    console.log('É um triângulo equilátero')
}
else if(a !== b && b !== c && c !== a){
    console.log('É um triângulo escaleno')
}
else if(a === b || b === c || a === c){
    console.log("É um triângulo isósceles")
}
else{
    console.log('Outros valores')
}