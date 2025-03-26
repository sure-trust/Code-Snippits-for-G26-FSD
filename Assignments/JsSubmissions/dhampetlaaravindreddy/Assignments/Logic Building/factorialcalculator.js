//Write a function to calculate the factorial of a given number. 
// Use a loop instead of recursion.

function factorialCalculator(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialCalculator(5));