
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first number: ', num1 => {
    readline.question('Enter second number: ', num2 => {
        readline.question('Enter operation (+, -, *, /): ', operation => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            switch(operation){
                case '+':
                    console.log(num1 + num2);
                    break;
                case '-':
                    console.log(num1 - num2);
                    break;
                case '*':
                    console.log(num1 * num2);
                    break;
                case '/':
                    console.log(num1 / num2);
                    break;
                default:
                    console.log("Invalid operation");
            }
            readline.close();
        });
    });
});