let nomes = [];
for (let i = 0; i < 4; i++){
    let nome = prompt(`Digite o nome ${i + 1}:`);
    nomes.push(nome);
}

nomes.forEach(function(nome, index) {
    console.log(`Nome ${index + 1}: ${nome}`);;
    alert(`Nome ${index + 1}: ${nome}`);;
});