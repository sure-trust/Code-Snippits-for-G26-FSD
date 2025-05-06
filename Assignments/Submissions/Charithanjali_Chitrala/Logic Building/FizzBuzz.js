// START
// FOR i FROM 1 TO 20 DO:
//     IF i is divisible by 3 AND i is divisible by 5 THEN
//         PRINT "FizzBuzz"
//     ELSE IF i is divisible by 3 THEN
//         PRINT "Fizz"
//     ELSE IF i is divisible by 5 THEN
//         PRINT "Buzz"
//     ELSE
//         PRINT i
//     ENDIF
// ENDFOR
// END



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
