function isPalindrome(str) {
    return str === str.split('').reverse().join(''); 
  }
  console.log(isPalindrome("mam")); 
  console.log(isPalindrome("hello"));