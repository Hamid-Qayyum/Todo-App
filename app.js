import render from "./render.js";
import store from "./store.js";
import { addTodo , removeItemTodo, toogleCompleted} from "./store.js";


window.addEventListener("todosChange",()=>{
    render();
    const delete_todo_button = document.querySelectorAll(".delete-todo-button");
for (let delete_button of delete_todo_button){
    delete_button.addEventListener("click",(e)=>{
        const id = e.target.parentNode.parentNode.dataset.id;
        removeItemTodo(id)
    })
}

})
const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"));
if(storeFromLocalStorage?.todos.length >0){
    store.todos = storeFromLocalStorage.todos;
}

// get form  
const form = document.querySelector("#form");
const todo_title_input = document.querySelector(".todo-title-input");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoTitle = todo_title_input.value;
    const newTodo = {id : crypto.randomUUID(), title : todoTitle, status: ""}
        addTodo(newTodo)
        todo_title_input.value = ""
})
const delete_todo_button = document.querySelectorAll(".delete-todo-button");
for (let delete_button of delete_todo_button){
    delete_button.addEventListener("click",(e)=>{
        const id = e.target.parentNode.parentNode.dataset.id;
        removeItemTodo(id)
    })
}

const ul = document.querySelector(".todos");
ul.addEventListener("change",(e)=>{
    const target = e.target;
    if(target.classList.contains("todo-checkbox")){
        const id = target.closest(".todo").dataset.id;
        const completed = target.checked;
        toogleCompleted(id,completed)
    }
})