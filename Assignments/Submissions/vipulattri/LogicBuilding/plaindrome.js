function checkPalindromeAndCount(str) {
    let reversedStr = str.split('').reverse().join('');
    let isPalindrome = (str === reversedStr);

    let evenCount = 0, oddCount = 0;
    
    for (let char of str) {
        let num = parseInt(char);
        if (!isNaN(num)) {
            if (num % 2 === 0) evenCount++;
            else oddCount++;
        }
    }

    console.log("Palindrome:", isPalindrome);
    console.log("Even Count:", evenCount);
    console.log("Odd Count:", oddCount);
}

// Example usage
checkPalindromeAndCount("1221"); // Palindrome: true, Even Count: 4, Odd Count: 0
checkPalindromeAndCount("12345"); // Palindrome: false, Even Count: 2, Odd Count: 3
