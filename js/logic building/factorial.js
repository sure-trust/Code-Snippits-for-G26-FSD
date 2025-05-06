//Define a function with factorial with a argument n
//assign fact equal to 1 
//for loop initalize with 2 and check it is less than or equal to n ,increment it
//now multiply it to fact till the loop satisfied
//return the fact
function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(3)); 
console.log(factorial(4));  
