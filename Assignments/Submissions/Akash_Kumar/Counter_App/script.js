let counterstatus = document.querySelector("#counterstatus")
let incrementButton = document.querySelector("#increment")
let decrementButton = document.querySelector("#decrement")

let counter = 0

incrementButton.addEventListener("click", ()=>{
    counter += 1
    counterstatus.textContent = counter
    console.log("The counter is : "+ counter)
})

decrementButton.addEventListener("click", ()=>{
    counter -= 1
    counterstatus.textContent = counter
    console.log("The counter is : "+ counter)
})