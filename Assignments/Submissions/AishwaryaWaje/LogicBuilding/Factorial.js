function factorial(n) {
  if (n < 0) return 'Factorial not defined';

  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));
console.log(factorial(-4));
