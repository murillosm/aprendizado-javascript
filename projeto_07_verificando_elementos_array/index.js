let tempLondon = [23, 25, 27, 29, 31, 33, 35];


// Explicação de metodo every - verifica se todos os elementos de um array passam por um teste especificado
// Retorna true se todos os elementos passarem no teste, caso contrário, retorna false
// Exemplo 1
const tempPositive = tempLondon.every(
    function (value) {
        return value => 0;
    }
)

console.log(tempPositive) // false


//Filtrando uma Array com o filter
//Exemplo 2
const tempPositive2 = tempLondon.filter(value => value => 0);

console.log(tempPositive2)