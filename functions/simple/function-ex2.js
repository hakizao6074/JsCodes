// Função 2: somaArray
// Descrição: recebe um array de números e retorna a soma de todos os elementos.
// Entrada: numbers (Array<number>) — se o array estiver vazio, retorna 0.
// Saída: número (soma dos elementos)

// Observações/edge cases:
// - Se algum elemento não for número, é ignorado (para evitar NaN)
// - Usa reduce com valor inicial 0 para garantir comportamento correto com arrays vazios

function somaArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('O parâmetro deve ser um array');
  }

  // Filtra apenas valores numéricos válidos (não NaN), depois soma
  const soma = numbers
    .filter(n => typeof n === 'number' && !Number.isNaN(n))
    .reduce((acc, n) => acc + n, 0);

  return soma;
}

// Demonstração
console.log(somaArray([10, 20, 30]));    // Saída: 60
console.log(somaArray([]));              // Saída: 0
console.log(somaArray([5, 'a', 10]));    // Saída: 15 (ignora 'a')
