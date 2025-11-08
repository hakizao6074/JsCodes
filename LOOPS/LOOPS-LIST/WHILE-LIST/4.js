let n = Number(prompt("Digite um número inteiro:"));

let i = 1;
while (i <= 10) {
    let resultado = n * i;
    console.log(`${n} x ${i} = ${resultado}`);
    alert(`${n} x ${i} = ${resultado}`);
    i++; 
}