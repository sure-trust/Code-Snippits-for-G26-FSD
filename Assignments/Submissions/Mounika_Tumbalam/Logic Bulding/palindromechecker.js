function palindromechecker(str){
    str=str.toLowerCase();
    let newstr="";
    for(let char of str){
        if((char >='a' && char<="z") || (char >='0' && char <='9')){
            newstr+=char;
        }
    }
    let rev=newstr.split('').reverse().join('');
    return newstr===rev;
}
let str1="Race car";
console.log(palindromechecker(str1)?"Palindrome": "Not a palindrome");