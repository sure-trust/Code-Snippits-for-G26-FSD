let numbers = [12,34,5,543,23];

// ascending order
let ascending = numbers.sort((a, b) => a - b);
console.log("Ascending order:", ascending);

// descending order
let descending = numbers.sort((a, b) => b - a);
console.log("Descending order:", descending);