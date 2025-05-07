<<<<<<< HEAD
let numbers=Array.from({length:10},()=>Math.floor(Math.random()*10))
let countE=numbers.filter(num=>num%2==0).length;
let countO=numbers.filter(num=>num%2!=0).length;
console.log(`The no of even numbers : ${countE}`);
=======
let numbers=Array.from({length:10},()=>Math.floor(Math.random()*10))
let countE=numbers.filter(num=>num%2==0).length;
let countO=numbers.filter(num=>num%2!=0).length;
console.log(`The no of even numbers : ${countE}`);
>>>>>>> upstream/main
console.log(`The no of odd numbers : ${countO}`);