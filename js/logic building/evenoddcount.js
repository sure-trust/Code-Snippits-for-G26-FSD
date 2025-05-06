//initalize an array of 10 random numbers between 1 and 100
//assign ec with 0 assuming that there is no even numbers in the array and oc with 0 assuming that there is no odd numbers in the array
//traverse the loop of numbers
//check if i is divided by if stisfies increment ec by 1
//otherwise increment oc 
//print ec and oc 
let numbers = [9,21,7,18,35,98,76,100,71,65]

let ec = 0, oc = 0;
for (let i of numbers) {
    if (i % 2 === 0) {
        ec++;
    } else {
        oc++;
    }
}



console.log(ec);
console.log(oc);
