<<<<<<< HEAD
function removeDuplicates(arr) {
  if (!arr || arr.length === 0) {
    return []; // Return empty array for invalid input
  }

  const uniqueArray = [];
  const seen = new Set(); // Use a Set to track seen elements

  for (const element of arr) {
    if (!seen.has(element)) {
      seen.add(element);
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

// Example usage:
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueNumbers = removeDuplicates(numbersWithDuplicates);

console.log("Original array:", numbersWithDuplicates);
=======
function removeDuplicates(arr) {
  if (!arr || arr.length === 0) {
    return []; // Return empty array for invalid input
  }

  const uniqueArray = [];
  const seen = new Set(); // Use a Set to track seen elements

  for (const element of arr) {
    if (!seen.has(element)) {
      seen.add(element);
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

// Example usage:
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueNumbers = removeDuplicates(numbersWithDuplicates);

console.log("Original array:", numbersWithDuplicates);
>>>>>>> upstream/main
console.log("Array without duplicates:", uniqueNumbers);