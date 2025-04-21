let a = 3;
let b = 7;

console.log("Before swapping: a =", a, ", b =", b);

// Swapping using arithmetic operations
a = a + b; // a now becomes 10 (3 + 7)
b = a - b; // b becomes 3 (10 - 7)
a = a - b; // a becomes 7 (10 - 3)

console.log("After swapping: a =", a, ", b =", b);
