let n = [];

for (let i = 0; i < 5; i++) {
  let nu = Number(prompt(`Digite um número:`));
  n.push(nu); 
}

n.forEach(function(nu) {
  console.log(`numero antes ${nu} numero depois ${nu * 2}\n`);
  alert(`numero antes ${nu} numero depois ${nu * 2}\n`);
});
