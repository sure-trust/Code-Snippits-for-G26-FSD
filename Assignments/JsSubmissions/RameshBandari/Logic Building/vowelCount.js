//Write a function that takes a string as input. Count and print the number of vowels in the string.

function vowelCount(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(vowelCount("wElcome"));