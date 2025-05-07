let arr = [3,5,3,5,3,5,3,5];

function removeDuplicate(data) {
    return [...new Set(data)];
}
console.log(removeDuplicate(arr));