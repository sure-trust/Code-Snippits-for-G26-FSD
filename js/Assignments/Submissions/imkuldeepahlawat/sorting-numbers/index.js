// Sorting Numbers
const numbers = [34, 12, 78, 45, 23];

// Ascending order
const ascendingOrder = [...numbers].sort((a, b) => a - b);

// Descending order
const descendingOrder = [...numbers].sort((a, b) => b - a);

console.log("Original array:", numbers);
console.log("Ascending order:", ascendingOrder);
console.log("Descending order:", descendingOrder); 