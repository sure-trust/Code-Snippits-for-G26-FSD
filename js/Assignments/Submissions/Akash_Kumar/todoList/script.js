for(let i =1 ;i<200;i++){
    fetch('https://dummyjson.com/todos/random')
    .then(res => res.json()).then(data => {

        ShowList(data);

    })
}

    function ShowList(data) {

       const data_item_container = document.querySelector("#data_item_container");

       const row_data = document.createElement("div")
       row_data.classList.add("row");

       const user_id  = document.createElement("div")
       user_id.classList.add("user_id");

       const data_id = document.createElement("div")
       data_id.classList.add("data_id");

       const dataStatus = document.createElement("div")
       dataStatus.classList.add("data_status");

       const todo = document.createElement("div")
       todo.classList.add("todo");

       user_id.innerText = data.id;
       data_id.innerText = data.userId;
       dataStatus.innerHTML = data.completed;
       todo.innerHTML =  data.todo;


       row_data.appendChild(user_id)
       row_data.appendChild(data_id)
       row_data.appendChild(dataStatus)
       row_data.appendChild(todo)

       data_item_container.appendChild(row_data)


       
    //    dataSet.innerHTML += `<h3> Id: ${data.id} </h3> <br> <h3> Todo: 
    //    ${data.todo}  </h3> <br> <h3> Completed : ${data.completed} 
    //    </h3> <br> <h3> User Id : ${data.userId}`
    }