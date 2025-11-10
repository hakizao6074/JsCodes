// Função 3: verificar primo (isPrime)
// Descrição: verifica se um número inteiro positivo é primo.
// Entrada: n (number) — número inteiro; valores menores que 2 não são primos.
// Saída: boolean — true se for primo, false caso contrário.

// Estratégia e complexidade:
// - Caso simples: n < 2 -> false
// - Testa divisores apenas até a raiz quadrada de n (melhora complexidade)
// - Rejeita números que não são inteiros

function isPrime(n) {
  // Validações iniciais
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('O parâmetro deve ser um número inteiro');
  }

  if (n < 2) return false; // 0 e 1 não são primos
  if (n === 2) return true; // 2 é primo
  if (n % 2 === 0) return false; // pares maiores que 2 não são primos

  const limite = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limite; i += 2) { // testa apenas ímpares
    if (n % i === 0) return false;
  }

  return true;
}

// Demonstração
console.log(isPrime(1));   // Saída: false
console.log(isPrime(2));   // Saída: true
console.log(isPrime(17));  // Saída: true
console.log(isPrime(18));  // Saída: false
