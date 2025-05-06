// Count Even and Odd Numbers
function generateRandomNumbers(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
}

function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    
    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });
    
    return { evenCount, oddCount };
}

const numbers = generateRandomNumbers(10);
const counts = countEvenOdd(numbers);

console.log("Numbers:", numbers);
console.log("Even numbers:", counts.evenCount);
console.log("Odd numbers:", counts.oddCount); 