function isPalindrome(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return false; // Handle invalid input or empty string
    }
  
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
  
    // Compare the cleaned string and reversed string
    return cleanStr === reversedStr;
  }
  
  // Example usage:
  console.log("racecar ==",isPalindrome("racecar")); // true
  console.log("A man, a plan, a canal: Panama==",isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log("hello==",isPalindrome("hello")); // false
  console.log("==",isPalindrome("")); // false
  console.log("12321==",isPalindrome(12321)); // false, since it is not a string.
  console.log("madam==",isPalindrome("madam")); // true
  console.log("Was it a car or a cat I saw?==",isPalindrome("Was it a car or a cat I saw?")); // true