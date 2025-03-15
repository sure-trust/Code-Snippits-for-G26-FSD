function countVowels(str) {
    let vowels = "aeiouAEIOU"; 
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    console.log("Number of vowels:", count);
  }
  

  countVowels("Encyclopedia");