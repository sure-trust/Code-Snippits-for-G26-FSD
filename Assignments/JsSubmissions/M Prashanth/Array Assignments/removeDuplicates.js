let array = [1, 2, 2, 3, 5, 4, 5, 1, 6];
let uniqueArray = [];
array.forEach(item => {
    if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
    }
});
let reversedArr = uniqueArray.reverse();
console.log("Unique Array:", uniqueArray);

let stringArr = ["apple", "banana", "car", "bike", "dog"];
let reversedStringArr = [];
for (let i = stringArr.length - 1; i >= 0; i--) {
    reversedStringArr.push(stringArr[i]);
}
console.log("Reversed String Array:", reversedStringArr);