
function factorialCalculator(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialCalculator(5));