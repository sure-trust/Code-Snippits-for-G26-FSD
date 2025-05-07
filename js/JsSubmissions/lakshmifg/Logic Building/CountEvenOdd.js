<<<<<<< HEAD
// Generate an array of 10 random numbers between 1 and 100
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// Initialize counters for even and odd numbers
let evenCount = 0;
let oddCount = 0;

// Loop through the array and count even and odd numbers
numbers.forEach(num => {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
});

// Print the results
console.log("Random numbers:", numbers);
console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);
=======
// Generate an array of 10 random numbers between 1 and 100
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// Initialize counters for even and odd numbers
let evenCount = 0;
let oddCount = 0;

// Loop through the array and count even and odd numbers
numbers.forEach(num => {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
});

// Print the results
console.log("Random numbers:", numbers);
console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);
>>>>>>> upstream/main
