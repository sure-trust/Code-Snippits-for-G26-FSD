// Palindrome Checker

// Write a function that takes a string as input.
// Check if the string is a palindrome (the same forward and backward).

function checkPalindrome(input) {
    // Convert the string to lowercase to make the comparison case-insensitive.
    input = input.toLowerCase();
    
    // Remove any non-alphanumeric characters from the string.
    input = input.replace(/[^a-z0-9]/g, '');
    
    // Check if the reversed string is equal to the original string.
    return input === input.split('').reverse().join('');
}

// Test the function with some examples.
console.log(checkPalindrome('A man, a plan, a canal: Panama'));  // Expected output

console.log(checkPalindrome('race a car'));  // Expected output

console.log(checkPalindrome('Was it a car or a cat I saw?'));  // Expected output

console.log(checkPalindrome('Hello World'));  // Expected output: false (not a palindrome)
