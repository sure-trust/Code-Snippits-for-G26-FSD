//Write a function that takes a string as input. Check if the string is a palindrome (the same forward and backward).

function palindromeChecker(str) {
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromeChecker("madam"));
console.log(palindromeChecker("hello"));

//output:
// true
// false
