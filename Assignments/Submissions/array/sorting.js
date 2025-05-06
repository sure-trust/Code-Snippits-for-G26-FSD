// Sorting Numbers

// Create an array of 5 numbers.
// Sort the numbers in ascending and descending order.
// Print the sorted arrays.
let numbers = [4, 2, 9, 6, 5];

// Sort the numbers in ascending order.

numbers.sort((a, b) => a - b);

console.log("Ascending order: ", numbers);

// Sort the numbers in descending order.

numbers.sort((a, b) => b - a);

console.log("Descending order: ", numbers);

console.log("\n\n Ascending and descending in other format");

console.log(`Ascending order: ${numbers.slice().sort()}`);

console.log(`Descending order: ${numbers.slice().sort().reverse()}`);
