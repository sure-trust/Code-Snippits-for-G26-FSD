for(let i =1 ;i<101;i++){
    fetch('https://dummyjson.com/todos/random')
    .then(res => res.json()).then(data => {
    
        displayData(data);
    
    })
    }
    
    function displayData(data) {
    
       console.log(data.id);
       console.log(data.completed);
       console.log(data.todo);
       console.log(data.userId);
       const ResultSet = window.document.getElementById('boxy');
       ResultSet.innerHTML += `<h3> Id: ${data.id} </h3> <br> <h3> Todo: ${data.todo}  </h3> <br> <h3> Completed : ${data.completed} </h3> <br> <h3> User Id : ${data.userId} </h3> <hr>`
    
    
    
    
    }