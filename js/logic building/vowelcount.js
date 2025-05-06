//Define a funtion with name as vowelcount with str argument
//intialize count as 0 assuming that no vowels are present in the string 
//Iterate through each character in the string
//Check if the character is one of the vowels in both lowercase and uppercase
//If it's a vowel, increment the count
//continue till the loops runs
// print the count
function vowelsCount(str) {
    let count = 0;

    for (let chr of str) {
        if (chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u' ||chr === 'A' || chr === 'E' || chr === 'I' || chr === 'O' || chr === 'U') {
            count++;
        }
    }

    console.log( count);
}
vowelsCount("Jyoshnika");
