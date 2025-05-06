// START  
//   SET num1 = 10, num2 = 5  
//   SET operation = "add"  
//   SET result  
//   SWITCH (operation)  
//       CASE "add": result = num1 + num2  
//       CASE "subtract": result = num1 - num2  
//       CASE "multiply": result = num1 * num2  
//       CASE "divide":  
//           IF num2 !== 0 THEN  
//               result = num1 / num2  
//           ELSE  
//               result = "Error: Division by zero"  
//           ENDIF  
//       DEFAULT: result = "Invalid operation"  
//   END SWITCH  
//   PRINT "Result:", result  
// END  



let num1 = 764, num2 = 76;
let operation = "add"; 
let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        break;
    default:
        result = "Invalid operation";
}
console.log("Result:", result);
