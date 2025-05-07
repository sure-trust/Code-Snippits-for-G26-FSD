// Create three variables: num1, num2, and operation (e.g., 'add'). Write code to perform addition, subtraction, multiplication, or division based on the value of operation. Print the result.

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

// Output:
// Enter first number: 5
// Enter second number: 3
// Enter operation (+, -, *, /): *
// 15