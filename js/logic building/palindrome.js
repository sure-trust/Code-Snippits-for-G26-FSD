//define a function with name as isPalindrome with argument str
//intialize rev as empty string 
//for loop with intalization length of str-1 and check if that is greater than 0 and decrement it 
//add that element to rev
//after completion of the loop check wheather str is equal to reversed
//print true or false

function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return str === rev;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("sir"));   