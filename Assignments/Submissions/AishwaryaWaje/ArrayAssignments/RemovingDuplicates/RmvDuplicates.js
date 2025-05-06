let numbers = [43, 36, 24, 5, 36, 26, 5, 11];

let updatedNumbers = [];
for (let j = 0; j < numbers.length; j++) {
  if (!updatedNumbers.includes(numbers[j])) {
    updatedNumbers.push(numbers[j]);
  }
}

console.log(updatedNumbers);
