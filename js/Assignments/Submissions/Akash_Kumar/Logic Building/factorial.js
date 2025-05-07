// Factorial Calculator

// Write a function to calculate the factorial of a given number.
// Use a loop instead of recursion.

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Test the function with different inputs

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(10)); // Output: 3628800