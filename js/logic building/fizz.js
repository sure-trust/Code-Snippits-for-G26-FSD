//intialize for loop  with 1 ,check that it is lessthan or equal to 20 and increment by 1
//In if conditioncheck if i divided by 3 and i divided by 5  if it satisfy both  then print fizzbuzz
//else if i is divided by 3 print fizz
//else if i is divided by 5 print buzz
//else print the i
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
