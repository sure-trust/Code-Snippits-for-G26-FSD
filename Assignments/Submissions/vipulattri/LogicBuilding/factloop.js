function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040
console.log(factorial(0)); // Output: 1 (because 0! is 1)
