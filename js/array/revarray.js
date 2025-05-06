//assign the strings with array
//intalize revarray with empty array
//for loop will intialize with length of strings-1 and check it is greater than 0,decrement by 1
//after extracting last  element from strings it is pushed into the revarray and it follows until the condition is satified in for loop
//print the revarray
let strings = ["siri","ammu","Sai","Honey","shannu"];
let revarray = [];

for (let i = strings.length - 1; i >= 0; i--) {
    revarray.push(strings[i]);
}

console.log( revarray);
