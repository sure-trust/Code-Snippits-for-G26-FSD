let numbers=[8,9,61,77,66,44,33,22,80,96]
let evencount=numbers.filter(num=>num%2==0).length;
let oddcount=numbers.length-evencount
console.log("numbers",numbers)
console.log("even numbers",evencount)
console.log("oddnumbers",oddcount)