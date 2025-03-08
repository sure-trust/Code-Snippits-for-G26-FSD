console.log("string is palindrome or not");
function isPalindrome(str)
{
    let str1=str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr=str1.split('').reverse().join('');
    return str1===reversedStr;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("a man, a plan, a canal, panama"));