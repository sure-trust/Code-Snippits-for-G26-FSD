let arr=[];
for(let i=0;i<10;i++)
{
    arr.push(Math.floor(Math.random()*100)+1);
}
let evenCount=0;
let oddCount=0;
for(let num of arr)
{
    if(num % 2===0)
    {
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log("random numbers are:",arr);
console.log("even numbers count are:",evenCount);
console.log("odd numbers count are:",oddCount);