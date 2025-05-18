// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

// menu para o usuário
console.log("======= MENU =======");
console.log("1. Ver saudação");
console.log("2. Calcular o dobro de um número");
console.log("3. Calcular o triplo de um número");

// entrada do usuário
const opcao = prompt("Escolha uma opção (1-3): ");

// opções disponíveis
switch (opcao) {
  case '1':
    console.log("Olá! Seja bem-vindo ao sistema simples de contas!");
    break;

  case '2':
    const numero_d = Number(prompt("Digite um número: "));
    console.log(`O dobro de ${numero_d} é ${numero_d * 2}`);
    break;

  case '3':
    const numero_t = Number(prompt("Digite um número: "));
    console.log(`O triplo de ${numero_t} é ${numero_t * 3}`);
    break;

  default:
    console.log("Opção inválida. Tente novamente.");
}