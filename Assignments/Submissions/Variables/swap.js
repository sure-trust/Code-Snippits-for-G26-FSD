// Swapping Variables

// Take two variables, a and b, with initial values.
// Swap their values without using a temporary variable.
// Print both variables.
let a = 5;
let b = 20;
console.log("Before swapping variables: \n a: " + a + " \n b: " + b);
[a,b] = [b,a];

console.log("\n\nAfter swapping variables: \n a: " + a + " \n b: " + b);