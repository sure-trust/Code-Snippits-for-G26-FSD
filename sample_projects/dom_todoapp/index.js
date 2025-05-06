let rootElement = window.document.getElementById('root')
console.log(rootElement)


let ChnageTaskName = false

if(rootElement){
    rootElement.innerHTML = `<div class="w-full  flex flex-col items-center gap-3 p-[10px] border">
    <div class="w-full flex  justify-center gap-2" >
      <input type="text" class="w-[300px] border rounded p-3" id="taskName" > 
      <button class="capitalize" id="addButton">add</button>
    </div>
    <div class="w-[500px] h-[700px] border rounded p-3 flex flex-col gap-3" id="todoList"></div>
        </div>

    `
    let taskNameValueElement = document.getElementById('taskName')
    let addButtonElement = document.getElementById('addButton')
    let todolistElement = document.getElementById('todoList')


    addButtonElement.addEventListener('click',()=>{


        
// console.log(taskNameValueElement.value)
        const newTaskName = taskNameValueElement.value


        let taskElement = document.createElement('div')
        taskElement.className = 'flex gap-2 border p-2'
        taskElement.id = todolistElement.childElementCount


        
        let taskNameElement = document.createElement('h1')
        taskNameElement.textContent = newTaskName
        taskNameElement.className = 'text-center text-4xl'
        taskNameElement.add
        let sts = document.createElement('button')
        sts.textContent = 'pending'
        sts.className = 'border capitalize px-2 rounded'
        sts.addEventListener('click',()=>{
            if(sts.textContent === 'pending'){
                sts.textContent = 'completed'
            }else{
                sts.textContent = 'pending'
            }
        })

        let deleteTaskButton = document.createElement('button')
        deleteTaskButton.textContent='Delete Todo'
        deleteTaskButton.className = 'border capitalize px-2 rounded bg-red-500 text-white'
        deleteTaskButton.addEventListener('click',()=>{
            taskElement.remove()
        })
        taskElement.appendChild(taskNameElement)
        taskElement.appendChild(sts)
        taskElement.appendChild(deleteTaskButton)

todolistElement.appendChild(taskElement)
taskNameValueElement.value = ''

    })


    
}