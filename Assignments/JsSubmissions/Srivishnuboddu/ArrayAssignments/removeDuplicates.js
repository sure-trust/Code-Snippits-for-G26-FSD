let numbers = [5, 3, 7, 3, 5, 8, 9];

let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (uniqueNumbers.indexOf(numbers[i]) === -1) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log("Array without duplicates:", uniqueNumbers);
