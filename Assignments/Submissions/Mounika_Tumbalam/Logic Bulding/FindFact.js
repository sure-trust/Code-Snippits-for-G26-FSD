//Function for finding the factorial of a number 
// In this function we are using the fact variable to storing the factorial of a number
//while loop is used to iterate the loop until the number doesn't become 0

function Factorial(number){
    let fact=1;
    while(number>0){
   
            fact=fact*number//1*4=fact = 4,4*3,12*2,24*1=>fact = 24
        number--;//number = 3,2,1

    }
    return fact;
}
let number = 4;
console.log(`The Factorial of a number ${number} is : `, Factorial(4));