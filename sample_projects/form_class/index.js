window.document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('hello world')
    console.log(window.location.href)
    console.log(window.location.search)
})
fetch('https://dummyjson.com/todos',{
     method: "POST"
}).then((res) => {
    res.json().then((data) => {
        console.log(data)
    })
})
