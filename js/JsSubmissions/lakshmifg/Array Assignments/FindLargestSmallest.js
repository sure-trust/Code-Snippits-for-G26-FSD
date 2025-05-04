<<<<<<< HEAD
function findMinMax(arr) {
    if (!arr || arr.length === 0) {
      return { smallest: null, largest: null };
    }
  
    let smallest = arr[0];
    let largest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return { smallest: smallest, largest: largest };
  }
  
  // Example usage:
  const numbers = [22, 5, 47, 18, 19];
  const result = findMinMax(numbers);
  console.log("number=",numbers);
  if (result.smallest !== null && result.largest !== null) {
    console.log("Smallest number:", result.smallest);
    console.log("Largest number:", result.largest);
  } else {
    console.log("Array is empty or invalid.");
=======
function findMinMax(arr) {
    if (!arr || arr.length === 0) {
      return { smallest: null, largest: null };
    }
  
    let smallest = arr[0];
    let largest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return { smallest: smallest, largest: largest };
  }
  
  // Example usage:
  const numbers = [22, 5, 47, 18, 19];
  const result = findMinMax(numbers);
  console.log("number=",numbers);
  if (result.smallest !== null && result.largest !== null) {
    console.log("Smallest number:", result.smallest);
    console.log("Largest number:", result.largest);
  } else {
    console.log("Array is empty or invalid.");
>>>>>>> upstream/main
  }