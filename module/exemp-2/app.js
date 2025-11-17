const calc = require('./calc')

const resultadosSoma = calc.somar(10,5);
const resultadoSubtra = calc.subtrair(20,7);


console.log("---Exemplo 2: Exportando multiplas Funções ---")
console.log("Resultado da soma (10 + 5):" + resultadosSoma)
console.log("Resultado da soma (20 - 7):" + resultadoSubtra)
console.log("O valor do PI é:" + calc.PI )
