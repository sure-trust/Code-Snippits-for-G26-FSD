let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let operation = prompt("Enter operation");
var result = "Weclome to the calculator made by Vipul";
if(operation === "+"){
    console.log(num1+num2)
     result = num1+num2;
}
if(operation === "-"){
    console.log(num1-num2)
     result = num1-num2;
}
if(operation === "*"){
    console.log(num1*num2)
     result = num1*num2;
}
if(operation === "/"){
     result = num1/num2;
}
document.getElementById("result").innerHTML=result;