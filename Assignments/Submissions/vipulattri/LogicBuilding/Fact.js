// Function to count vowels in a string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    console.log("Vowel Count:", vowelCount);
}

// Function to calculate factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial of", n, "is:", fact);
}

// Example usage
countVowels("Hello World"); // Output: Vowel Count: 3
factorial(5); // Output: Factorial of 5 is: 120
