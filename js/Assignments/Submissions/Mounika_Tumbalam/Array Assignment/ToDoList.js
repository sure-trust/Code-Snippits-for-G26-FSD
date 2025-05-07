//An empty array is created ToDoList=[]
//Assigning the values to the array
//shift() method is used to remove the first item in array
//push() method is used to push the elements at the end of the array.

let ToDoList = []
ToDoList[0] = 'coding'
ToDoList[1] = 'playing'
ToDoList[2] = 'Listening Music'
console.log(ToDoList.shift())
ToDoList.push('shopping');
console.log(ToDoList);
