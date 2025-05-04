<<<<<<< HEAD
let num1 = 10;
let num2 = 5;
let operation = 'divide';

let result;

switch (operation) {
  case 'add':
    result = num1 + num2;
    break;
  case 'subtract':
    result = num1 - num2;
    break;
  case 'multiply':
    result = num1 * num2;
    break;
  case 'divide':
    if (num2 === 0) {
      result = "Cannot divide by zero";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid operation";
}

=======
let num1 = 10;
let num2 = 5;
let operation = 'divide';

let result;

switch (operation) {
  case 'add':
    result = num1 + num2;
    break;
  case 'subtract':
    result = num1 - num2;
    break;
  case 'multiply':
    result = num1 * num2;
    break;
  case 'divide':
    if (num2 === 0) {
      result = "Cannot divide by zero";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid operation";
}

>>>>>>> upstream/main
console.log("Result:", result)