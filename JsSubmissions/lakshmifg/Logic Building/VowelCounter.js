function countVowels(str) {
    if (typeof str !== 'string') {
      return 0; // Handle non-string input
    }
  
    const vowels = "aeiouAEIOU";
    console.log(vowels);
    let vowelCount = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    console.log("Number of vowels:", vowelCount);
    return vowelCount; // Return the count for potential further use
  }
  
  // Example usage:
  countVowels("Hello, world!"); // Output: Number of vowels: 3
  countVowels("Programming is fun"); // Output: Number of vowels: 5
  countVowels("rhythm"); // output: Number of vowels: 0
  countVowels(123); // output: 0.