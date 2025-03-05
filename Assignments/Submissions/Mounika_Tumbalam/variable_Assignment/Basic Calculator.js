//1. Take num1 and num2 are 2 variables 
// 2.now take a operation variable to assign it to which opeartion you want to perform
// 3.Use if condition to check which opearation you should perform 
// SET operation = 'add'  // Can be 'subtract', 'multiply', or 'divide'
// IF operation is 'add' THEN 
//     result = num1 + num2
//   ELSE IF operation is 'subtract' THEN
//     result = num1 - num2
//   ELSE IF operation is 'multiply' THEN
//     result = num1 * num2
//   ELSE IF operation is 'divide' THEN
//     IF num2 is NOT 0 THEN
//       result = num1 / num2
//     ELSE
//       result = "Error: Division by zero"
//     ENDIF
//   ELSE
//     result = "Invalid operation"
//   ENDIF

//   PRINT "Result: " + result


let num1 = 10;
let num2 =5;
let operation = 'division'; 
let result;
if (operation === 'addition') {
    result = num1 + num2;
} else if (operation === 'subtraction') {
    result = num1 - num2;
} else if (operation === 'multiplication') {
    result = num1 * num2;
} else if (operation === 'division') {
    result = num2 !== 0 ? num1 / num2 : 'Division by zero is not possible';
} else {
    result = 'Operation is not Specified';
}

console.log(`Result of the ${operation} is : ${result}`);

