<<<<<<< HEAD
function factorialLoop(num) {
    if (num < 0) {
      return "Factorial is not defined for negative numbers";
    }
  
    if (num === 0 || num === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage:
  console.log("factorial of 5",factorialLoop(5)); // Output: 120
  console.log("factorial of 0",factorialLoop(0)); // Output: 1
  console.log("factorial of 1",factorialLoop(1)); // Output: 1
=======
function factorialLoop(num) {
    if (num < 0) {
      return "Factorial is not defined for negative numbers";
    }
  
    if (num === 0 || num === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage:
  console.log("factorial of 5",factorialLoop(5)); // Output: 120
  console.log("factorial of 0",factorialLoop(0)); // Output: 1
  console.log("factorial of 1",factorialLoop(1)); // Output: 1
>>>>>>> upstream/main
  console.log("factorial of -3",factorialLoop(-3)); // Output: Factorial is not defined for negative numbers