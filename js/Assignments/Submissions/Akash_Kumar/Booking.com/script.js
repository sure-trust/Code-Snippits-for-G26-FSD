const content_style1 = document.querySelector("#content_style1")

const frame = document.querySelector("#frame");
const picture = document.querySelector("#picture")
const picture_name = document.querySelector("#picture_name")

// Image Array
const images = ["hotel1.jpeg","hotel2.jpeg","hotel3.jpeg","hotel4.jpeg","hotel5.jpeg","hotel6.jpeg","hotel7.jpeg","hotel8.jpeg",
    "hotel9.jpeg","hotel10.jpeg"]

for(i = 0;i < images.length;i++){

    // Frame container
    const new_frame = document.createElement("div")
    new_frame.id = "new_frame"

    // picture container
    const new_picture_container = document.createElement("div")
    new_picture_container.id = "new_picture_container"
    new_picture_container.style.backgroundImage = `url("Booking.com\\pictures\\"${images[i]})`; //assignment\Booking.com\pictures\hotel1.jpeg

    // picture Detail container
    const new_picture_detail = document.createElement("div")
    new_picture_detail.id = "new_picture_detail"
    new_picture_detail.innerText = "Location Name"

    new_frame.appendChild(new_picture_container)
    new_frame.appendChild(new_picture_detail)

    content_style1.appendChild(new_frame)
}

console.log("Everything is working fine")
console.log(content_style1)