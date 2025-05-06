function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
console.log(factorial(5)); 
console.log(factorial(7)); 