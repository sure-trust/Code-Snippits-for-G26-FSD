// Find Largest and Smallest

// Create an array of 5 numbers.
// Write code to find the largest and smallest numbers in the array without using built-in functions.
// Print both values.

let numbers = [5, 10, 8, 3, 7];

let largest = 0;
let smallest = 0;

for (let i = 0; i < numbers.length-2; i++) {
    largest = numbers[i] > numbers[i+1] ? numbers[i] : numbers[i+1];
    smallest = numbers[i] < numbers[i+1] ? numbers[i] : numbers[i+1];
}
console.log(numbers);
// console.log(`The array is ${numbers}`)
console.log(`The largest number is ${largest} \nThe smallest number is ${smallest}`);