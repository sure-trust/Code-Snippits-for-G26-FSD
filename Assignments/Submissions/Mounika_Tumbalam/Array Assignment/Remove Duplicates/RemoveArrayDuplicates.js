// Intialize the arr and its arr elements with duplicates 
//now create one more arr named unique elements
//now using set it can access only the unique elements into the array
//(...) is spread opearator is used to convert the set into an array
//print the array.

let arr = [1,2,4,5,2,45,23,67,24,13,56,67,2]

let unique_elements = [...new Set(arr)]
console.log("Updated Array without Duplicate elements: ",unique_elements);
