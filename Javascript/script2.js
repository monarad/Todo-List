const todoInput=document.querySelector(".todo-input")
const todoButton=document.querySelector(".todo-button")
const todoList=document.querySelector(".todo-list")
todoList.addEventListener("click",deleteCompleteTodo)


todoButton.addEventListener("click", addTodo)

function addTodo(event){
    event.preventDefault();
const todoDiv=document.createElement("div")
todoDiv.classList.add("todo");
 //todoDiv.style.background="red"
//  todoDiv.style.color="green"
//  todoDiv.innerText="mmmmmmm"

 const newTodo=document.createElement("li")
 newTodo.innerText=todoInput.value;

 saveLocalTodo(todoInput.value)
 newTodo.classList.add("todo-item");
 todoDiv.appendChild(newTodo)
 todoInput.value=""


 const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


todoList.appendChild(todoDiv)
}

function saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos"===null)){
        todos=[]

    }
    else
    {
        todos=JSON.parse(localStorage.getItem("todos"))

    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos))
}

function deleteCompleteTodo(event){
    const item=event.target;
    //console.log(item.parentElement){
        if(item.classList[0]==="trash-btn"){
            const todo=item.parentElement;
            todo.remove();

        }

        if(item.classList[0]==="complete-btn"){
            const todo=item.parentElement;
            todo.classList.toggle("completed")

        }
    }


