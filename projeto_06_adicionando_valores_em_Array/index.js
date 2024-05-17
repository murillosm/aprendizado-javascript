const num = [4, 5, 6]

num.push(7, 8, 9) // Adiciona valores no final do array

num.unshift(1, 2, 3) // Adiciona valores no início do array

num.splice(2, 0, 'novo valor') // Adiciona valores em uma posição específica do array

console.log(num)

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(num2.indexOf(5)) // Retorna o índice do valor 5
console.log(num2.includes(5)) // Retorna true se o valor 5 existir no array

//Localizando itens em uma Array de referencia
const movies = [
    { id: 1, title: 'Titanic' },
    { id: 2, title: 'The Matrix' },
    { id: 3, title: 'The Godfather' }
]

console.log(movies.includes({ id: 1, title: 'Titanic' })) // .includes não funciona para objetos literais pois ele compara a referência de memória

console.log(movies.find(function (movie) { // .find retorna o primeiro objeto que atende a condição passada como argumento da função callback
    return movie.title === 'The Matrix'
})) // Retorna o objeto que atende a condição


//arrow function
console.log(movies.find(movie => movie.title == 'The Matrix')) // => arrow function: retorna o objeto que atende a condição

//Removendo itens da Array
const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const removedItem = num3.pop() // Remove o último item do array e retorna o item removido
const removedItem2 = num3.shift() // Remove o primeiro item do array e retorna o item removido
const removedItem3 = num3.splice(4, 5) // Remove um item de uma posição específica do array e retorna o item removido

console.log(num3)
console.log(removedItem)
console.log(removedItem2)
console.log(removedItem3)


//Concatenando uma Array
let numbers = [1, 2, 3]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters) // Concatena duas arrays
half = all.splice(3, 5) // Remove os elementos da posição 3 até a posição 5

console.log(all)
console.log(half)


//Utilizando o Join Array

//O join é um método que transforma os elementos de um array em uma string. Ele concatena os elementos do array, separando-os por um delimitador que você especifica.

let clients = ['Ana', 'Carlos', 'Maria', 'José']
console.log(clients)

let clientsJoin = clients.join(', ') // Junta os elementos do array em uma string separados por um delimitador
console.log(clientsJoin)



//Revertendo a sua Array
let clients2 = ['Ana', 'Carlos', 'Maria', 'José']
//clients.sort() // Ordena os elementos da array em ordem alfabética
clients.reverse() // Inverte a ordem dos elementos da array


console.log(clients2)