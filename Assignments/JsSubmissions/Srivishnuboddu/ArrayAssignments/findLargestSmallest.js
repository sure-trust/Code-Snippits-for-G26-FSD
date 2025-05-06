let numbers = [42, 17, 8, 99, 23];

let smallest = numbers[0];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Smallest:", smallest);
console.log("Largest:", largest);
