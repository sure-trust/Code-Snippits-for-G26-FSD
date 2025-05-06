// START
// DEFINE FUNCTION countVowels(str)
//     SET vowels = "aeiouAEIOU"
//     SET count = 0
//     FOR EACH char IN str DO:
//         IF vowels CONTAINS char THEN
//             INCREMENT count
//         ENDIF
//     ENDFOR
//     PRINT "Number of vowels:", count
// END FUNCTION
// CALL countVowels WITH "Hello World"
// END





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

countVowels("Hello World");
