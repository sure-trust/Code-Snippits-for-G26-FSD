function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
const number = 5;
console.log(`Factorial of ${number} is`, factorial(number));
