// START
// DEFINE FUNCTION isPalindrome(str)
//     SET reversedStr to an empty string
//     FOR i FROM length of str - 1 TO 0 DO:
//         APPEND str[i] TO reversedStr
//     ENDFOR
//     IF str EQUALS reversedStr THEN
//         RETURN true
//     ELSE
//         RETURN false
//     ENDIF
// END FUNCTI
// PRINT isPalindrome("madam") // Output: true
// PRINT isPalindrome("hello") // Output: false
// END





function isPalindrome(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 