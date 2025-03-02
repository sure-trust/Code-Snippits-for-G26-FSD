// Generate an array of 10 random numbers between 1 and 100
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

let evenCount = 0, oddCount = 0;

// Count even and odd numbers
for (let num of numbers) {
    num % 2 === 0 ? evenCount++ : oddCount++;
}

console.log("Numbers:", numbers);
console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);

// Function to count vowels in a string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

// Example usage
let inputString = "Hello World";
console.log("Vowel Count in", inputString, ":", countVowels(inputString));
