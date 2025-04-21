// START
//   SET a = 5, b = 10
//    Step 1: Add both values
//    Step 2: Assign new value to b
//    Step 3: Assign new value to a
//   PRINT "a:", a, "b:", b
// END


let a = 5, b = 10;
a = a + b;  
b = a - b; 
a = a - b;  
console.log("a:", a, "b:", b); 



let d = 12, c = 19;
[d, c] = [c, d]; 
console.log("d:", d, "c:", c); 
