// initalize numbers with an array
// initalize unique number with empty array such that you can aad the duplictes in it
//for loop for extracting elements from numbers
//initalize isduplicate as false which means there are no duplicates at the begining
//for loop to check if the current number already exists in uniqueNumbers
//check the number which extracted from numbers and number which is in uniquenumbers are same 
//then make isduplicate as true and break
// If it's not a duplicate, add it to uniqueNumbers
//print the uniquenumbers
let numbers = [12, 45, 12, 78, 45, 23, 56, 78];
let uniqueNumbers= []; 
for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log( uniqueNumbers);
