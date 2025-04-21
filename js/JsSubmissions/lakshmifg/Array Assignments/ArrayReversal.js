<<<<<<< HEAD
function reverseArray(arr) {
    if (!arr || arr.length === 0) {
      return []; // Handle empty or invalid input
    }
  
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  // Example usage:
  const strings = ["apple", "banana", "cherry", "date", "elderberry"];
  const reversedStrings = reverseArray(strings);
  
  console.log("Original array:", strings);
=======
function reverseArray(arr) {
    if (!arr || arr.length === 0) {
      return []; // Handle empty or invalid input
    }
  
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  // Example usage:
  const strings = ["apple", "banana", "cherry", "date", "elderberry"];
  const reversedStrings = reverseArray(strings);
  
  console.log("Original array:", strings);
>>>>>>> upstream/main
  console.log("Reversed array:", reversedStrings);