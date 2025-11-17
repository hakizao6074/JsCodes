// uma unica função que faz o trabalho de modulo
const gerarSaudacao = (nome) => {
    return `Ola ${nome}! Bem-Vindo ao mundo da modularidade Node.js`
};

//Exporta a função diretamente (o require() recebera a função em si)

module.exports = gerarSaudacao;
