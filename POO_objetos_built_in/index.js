let price = [20, 30, 40, 120, 60, 70, 80, 90, 100];

// o maior valor do array
console.log(Math.max(...price));

console.log(Math.max.apply(Math, price));

let message = 'Hello World';

console.log(message.startsWith('Hello')); // true