// Vowel Counter
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    str.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            count++;
        }
    });
    
    return count;
}

// Test cases
const testStrings = [
    "Hello World",
    "Programming is fun",
    "JavaScript",
    "OpenAI",
    "aeiou"
];

testStrings.forEach(str => {
    console.log(`"${str}" has ${countVowels(str)} vowels`);
}); 