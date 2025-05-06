// take  first number input from user 
// take  second number input from user 
// take  operation input from user 
// IF operation is "+"
    //perform addition
//ELSE IF operation is "-"
    //perform subtraction
//ELSE IF operation is "*"
    //perform Multiplication
//ELSE IF operation is "/"
//IF num2 is NOT 0
          //perform division
//ELSE
        // assign result as  Cannot divide by zero
//ENDIF
//ELSE
//assign result  as Invalid operation
//ENDIF

//print   result


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Enter operation : ", (operation) => {
            num1 = parseFloat(num1.trim());  
            num2 = parseFloat(num2.trim());

            let result;
            if (operation === '+') {
                result = num1 + num2;
            } else if (operation === '-') {
                result = num1 - num2;
            } else if (operation === '*') {
                result = num1 * num2;
            } else if (operation === '/') {
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            } else {
                result = "Invalid operation";
            }

            console.log("Result:", result);
            rl.close();
        });
    });
});
