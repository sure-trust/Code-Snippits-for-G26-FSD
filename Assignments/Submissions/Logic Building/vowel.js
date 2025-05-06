// Vowel Counter

// Write a function that takes a string as input.
// Count and print the number of vowels in the string.

function writeVowelCounter(str) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }
    }
    console.log(`The string contains ${vowelCount} vowels.`);
    return vowelCount;
    }
    
    writeVowelCounter('Hello World'); 
    writeVowelCounter('Programming');