function isFactorial(num)
{
    let factorial=1;
    for(let i=1;i<=num;i++)
    {
        factorial=factorial*i;
    }
    return factorial;
}
console.log(isFactorial(5));//output is 120
console.log(isFactorial(3));//output is 6