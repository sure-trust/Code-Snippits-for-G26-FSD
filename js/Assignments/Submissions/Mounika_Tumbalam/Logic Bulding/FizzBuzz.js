// Write a program to print numbers from 1 to 20.
//  If num % 3 == 0 print "Fizz".
//  If num % 5 == 0, print "Buzz". 
// If num %3 == 0 && num %5==0, print "FizzBuzz".
// else num is not divisible by 3 or 5.
for(let num = 1;num<=20;num++){
    if(num%3 && num%5==0)
        console.log("FizzBuzz");
    else if(num %  3 ==0)
        console.log("Fizz");
    else if(num%5==0)
        console.log("Buzz");
    else
        console.log(`${num} is not divisible by 3 or 5`)
    
}
