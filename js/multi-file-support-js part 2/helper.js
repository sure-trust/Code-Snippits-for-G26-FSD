console.log('hello 1')
console.log('hello 2')
new Promise(() => {
    console.log('hello 3')
})
 Promise.all([
     fetch('https://dummyjson.com/todos').then(()=>{
        console.log('api call')
     }),
    console.log('hello 4')

]).then(()=>{
    console.log('success')
}).catch(()=>{
    console.log('not success')
})
.finally(()=>{
    console.log('finaly not success')
})
console.log('hello 5')