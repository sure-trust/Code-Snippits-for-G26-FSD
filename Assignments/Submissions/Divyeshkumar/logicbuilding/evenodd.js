//Create an array of 10 random numbers. Write code to count how many numbers are even and how many are odd.

let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log(randomNumbers);
console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);