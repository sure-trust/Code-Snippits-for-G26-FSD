
let numbers = [1, 2, 3, 2, 4, 5, 3, 6, 1];

let uniqueNumbers = numbers.filter((num, index) => numbers.indexOf(num) === index);

console.log("Array after removing duplicates:", uniqueNumbers);
