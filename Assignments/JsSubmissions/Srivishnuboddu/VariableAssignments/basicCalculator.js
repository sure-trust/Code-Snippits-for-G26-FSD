let num1 = 10;
let num2 = 5;
let operation = 'add'; 
let result;

if (operation === 'add') {
    result = num1 + num2;
} else if (operation === 'subtract') {
    result = num1 - num2;
} else if (operation === 'multiply') {
    result = num1 * num2;
} else if (operation === 'divide') {
    result = num1 / num2;
} else {
    console.log('Invalid operation');
}
console.log(`Result of ${operation} is: ${result}`);
