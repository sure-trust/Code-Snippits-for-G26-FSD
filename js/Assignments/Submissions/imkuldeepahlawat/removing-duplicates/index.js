// Removing Duplicates
const numbersWithDuplicates = [1, 2, 3, 2, 4, 3, 5, 1];

// Method 1: Using Set
const uniqueNumbers = [...new Set(numbersWithDuplicates)];

// Method 2: Using filter
const uniqueNumbersAlt = numbersWithDuplicates.filter(
    (value, index, array) => array.indexOf(value) === index
);

console.log("Original array:", numbersWithDuplicates);
console.log("Array without duplicates:", uniqueNumbers); 