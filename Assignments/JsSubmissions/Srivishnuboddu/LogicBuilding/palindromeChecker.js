function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
const testString = "madam";
console.log(`${testString} is palindrome?`, isPalindrome(testString));
