// START
//   SET a = 10
//   SET b = 5

//   // Swapping logic
//   a = a + b
//   b = a - b
//   a = a - b

//   PRINT "a: " + a + ", b: " + b
// END

let num1 = 10;
let num2 = 5;

// Swapping without a temporary variable
num1 = num1 + num2; // 10+5=15
num2 = num1 - num2; //15-5=10
num1 = num1 - num2;//15-10=5

console.log(`a: ${num1}, b: ${num2}`);
