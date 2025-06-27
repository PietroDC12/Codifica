//3. Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(texto) {
  const palavras = texto.split(" ");
  const unicas = [];
  
  for (let i = 0; i < palavras.length; i++) {
    if (!unicas.includes(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }
  
  return unicas;
}

console.log(palavrasUnicas("Este é é o teste de palavras palavras"))