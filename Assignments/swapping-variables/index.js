// Swapping Variables
let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Swapping without temporary variable using addition/subtraction
a = a + b;
b = a - b;
a = a - b;

console.log("\nAfter swapping:");
console.log("a =", a);
console.log("b =", b); 