// Importa o módulo 'fs' (File System), que permite ler e escrever arquivos
const sistemaDeArquivos = require('fs');

// Importa o módulo 'path', que ajuda a trabalhar com caminhos de arquivos e pastas
const caminho = require('path');

// Define o caminho da pasta raiz do projeto (um nível acima da pasta atual)
const raiz = caminho.resolve(__dirname, '..');

// Define o local onde será salvo o arquivo de saída (manifesto em JSON)
const saida = caminho.join(__dirname, 'manifesto_js.json');

// Cria um array vazio para armazenar os resultados dos arquivos encontrados
const resultados = [];

// Função responsável por percorrer as pastas e arquivos de forma recursiva
function percorrer(diretorio) {
  // Lê todos os itens (arquivos e pastas) dentro do diretório atual
  const itens = sistemaDeArquivos.readdirSync(diretorio, { withFileTypes: true });

  // Faz um loop por cada item encontrado
  for (const item of itens) {
    // Cria o caminho completo do item (arquivo ou pasta)
    const completo = caminho.join(diretorio, item.name);

    // Ignora o arquivo de saída (para não ler o próprio manifesto)
    if (completo === saida) continue;

    // Se for uma pasta, chama novamente a função 'percorrer' (recursão)
    if (item.isDirectory()) {
      percorrer(completo);

    // Se for um arquivo .js (JavaScript), processa o conteúdo
    } else if (item.isFile() && completo.endsWith('.js')) {
      try {
        // Lê o conteúdo do arquivo como texto (UTF-8)
        const conteudo = sistemaDeArquivos.readFileSync(completo, 'utf8');

        // Adiciona as informações do arquivo (caminho e tamanho) ao array de resultados
        resultados.push({ caminho: completo, tamanho: conteudo.length });

      // Caso ocorra um erro (por exemplo, falta de permissão), registra o erro
      } catch (erro) {
        resultados.push({ caminho: completo, erro: String(erro) });
      }
    }
  }
}

// Inicia a varredura a partir da pasta raiz do projeto
percorrer(raiz);

// Cria o arquivo manifesto em formato JSON com todos os dados coletados
sistemaDeArquivos.writeFileSync(
  saida,
  JSON.stringify(
    {
      geradoEm: new Date().toISOString(), // Data e hora da geração
      quantidade: resultados.length,       // Quantidade de arquivos encontrados
      arquivos: resultados                 // Lista dos arquivos com detalhes
    },
    null, // Sem função de substituição
    2     // Indentação de 2 espaços para deixar o JSON legível
  )
);

// Exibe no console uma mensagem informando que o manifesto foi criado
console.log(
  'Manifesto criado em:',
  saida,
  'Arquivos .js encontrados:',
  resultados.length
);
