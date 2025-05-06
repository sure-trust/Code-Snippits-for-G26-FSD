function isPalindrome(String) {
  let reverseString = String.split('').reverse().join('');
  return String.toLowerCase() === reverseString.toLowerCase();
}
function PalindromeChecker(String) {
  if (isPalindrome(String)) {
    console.log('Palindrome');
  } else {
    console.log('Not Palindrome');
  }
}
PalindromeChecker('hello');

PalindromeChecker('Madam');
