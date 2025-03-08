console.log("numbres from 1 to 20");
console.log("dividible by 3=Fizz")
console.log("dividible by 5=Buizz")
for(let i=1;i<=20;i++)
{
    if(i % 3===0 && i % 5===0)
    {
        console.log("FizzBuizz");
    }
    else if(i % 3===0)
    {
        console.log("Fizz");
    }
    else if(i % 5===0)
    {
        console.log("Buizz");
    }
    else{
        console.log(i);
    }
}
