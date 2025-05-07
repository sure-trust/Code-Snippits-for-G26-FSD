
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
