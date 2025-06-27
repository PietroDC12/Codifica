//2. Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. 
// Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const readline = require('readline');

function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function perguntar() {
    rl.question('Adivinhe o número entre 1 e 100: ', (input) => {
      const chute = parseInt(input);
      tentativa++;

      if (chute < numeroSecreto) {
        console.log('Mais alto!');
        perguntar();
      } else if (chute > numeroSecreto) {
        console.log('Mais baixo!');
        perguntar();
      } else {
        console.log(`Parabéns! Você acertou em ${tentativa} tentativas.`);
        rl.close();
      }
    });
  }

  perguntar();
}

jogoAdivinhacao();
