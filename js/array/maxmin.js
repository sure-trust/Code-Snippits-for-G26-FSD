//initalize nums with array of numbers
// assume that min as num[0]
//assume that max as num[0]
//for loop is intialize with 1 ,checks till end of array and increment
  // check the if condition that the element is less than min
  //if true then min is assigned with num
  //check if num greater than max 
  //if true thrn max is assigned with num
//in the same way the process continue till the end of array 
//print the min
//print the max

let nums = [45, 12, 78, 23, 56];

let min= nums[0];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }
    if (nums[i] > max) {
        max = nums[i];
    }
}

console.log(min);
console.log( max);
