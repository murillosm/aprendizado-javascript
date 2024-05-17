let temIdadeMinima = true;
let temTituloEleitor = true;

let podeVotar = temIdadeMinima && temTituloEleitor;
console.log(podeVotar);

let podeViajar = !podeViajar;
console.log(podeViajar);



let corCliente = 'white';
let corEstoque = 'black';
let corVendida = corCliente || corEstoque;

console.log(corVendida);