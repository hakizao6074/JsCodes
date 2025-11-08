let num = parseInt(prompt("Coloque um número inteiro: "));

console.log(`Divisores de ${num}: `);
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
        alert(i);
    }
}

