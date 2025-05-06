// Factorial Calculator
function calculateFactorial(n) {
    if (n < 0) return "Invalid input: number must be non-negative";
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

// Test cases
const numbers = [0, 1, 5, 7, 10];

numbers.forEach(num => {
    console.log(`Factorial of ${num} is: ${calculateFactorial(num)}`);
}); 