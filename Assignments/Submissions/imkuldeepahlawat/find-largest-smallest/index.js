// Find Largest and Smallest Numbers
const numbers = [42, 17, 89, 33, 65];

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    
    return { min, max };
}

const result = findMinMax(numbers);
console.log("Array:", numbers);
console.log("Smallest number:", result.min);
console.log("Largest number:", result.max); 