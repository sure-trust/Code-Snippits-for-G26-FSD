const arr = [19,4,3,2,7,5,6,8,12,10]
let even_cnt=0,odd_cnt=0;
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0)
        even_cnt++;
    else
        odd_cnt++;
}
console.log('The even numbers count in the array: ',even_cnt);
console.log('The odd numbers count in the array: ',odd_cnt);