// Função 1: saudacao
// Descrição: recebe um nome (string) e retorna uma saudação personalizada.
// Entrada: name (string) — nome da pessoa. Se não fornecido, usa "Visitante" como padrão.
// Saída: string com a mensagem de saudação.

// Exemplo de uso: greet('Ana') -> 'Olá, Ana! Seja bem-vinda(o)!'
function greet(name = 'Visitante') {
  // Validação simples: garantir que o parâmetro seja uma string
  if (typeof name !== 'string') {
    throw new TypeError('O nome deve ser uma string');
  }

  // Monta a mensagem de saudação
  const message = `Olá, ${name}! Seja bem-vinda(o)!`;

  // Retorna a mensagem para o chamador
  return message;
}

// Demonstração
console.log(greet('Ana'));      // Saída: Olá, Ana! Seja bem-vinda(o)!
console.log(greet());           // Saída: Olá, Visitante! Seja bem-vinda(o)! 
// Tratamento de erro demonstrado comentado (não executa):
// console.log(greet(123)); // lançaria TypeError
