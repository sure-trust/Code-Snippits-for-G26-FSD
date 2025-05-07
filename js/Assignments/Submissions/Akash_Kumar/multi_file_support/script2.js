const test = {
    sum: (a,b)=>{
    console.log('Inside Test Object')
    return a+b
    }
}

function sum( a , b){
    console.log('Inside Function')
    return a + b
}

// const { sum : testsum} = test

// exporting above two functions

export {sum,test}