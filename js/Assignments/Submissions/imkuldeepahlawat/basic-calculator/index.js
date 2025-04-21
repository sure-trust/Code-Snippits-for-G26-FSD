// Basic Calculator
const num1 = 10;
const num2 = 5;
const operation = 'add';

function calculate(num1, num2, operation) {
    switch(operation.toLowerCase()) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) return "Cannot divide by zero";
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

console.log(`Result: ${calculate(num1, num2, operation)}`); 