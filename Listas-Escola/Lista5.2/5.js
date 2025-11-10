let numeros = []
for(let i = 0; i < 5; i++) {
   let pergunta = Number(prompt("Digite 5 numeros"))
    numeros.push(pergunta)
}
let numerosDobro = numeros.map(numeros => numeros * numeros);
alert(`Numeros antes do dobro ${numeros}`)
alert(`Numeros após o dobro ${numerosDobro}`)

    