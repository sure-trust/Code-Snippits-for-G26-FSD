let num1 = 10;
let num2 = 5;
let operation = 'add'; // Change this to 'subtract', 'multiply', or 'divide'

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
        result = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";
        break;
    default:
        result = "Invalid operation";
}

console.log("Result:", result);
