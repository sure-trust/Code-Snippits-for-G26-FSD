// Palindrome Checker
function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare string with its reverse
    return str === str.split('').reverse().join('');
}

// Test cases
const testStrings = [
    "A man, a plan, a canal: Panama",
    "race a car",
    "Was it a car or a cat I saw?",
    "hello",
    "12321"
];

testStrings.forEach(str => {
    console.log(`"${str}" is ${isPalindrome(str) ? 'a' : 'not a'} palindrome`);
}); 