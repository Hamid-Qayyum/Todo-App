import store from "./store.js";

const todos = document.querySelector(".todos");
function render(){
    const todoElements= store.todos.map(
        (todo)=>`<li data-id=${todo.id} class="todo">
        <span class="todo-title ${todo.status ? "completed":""}">${todo.title}</span>
        <div class="toogle=delete">
          <input type="checkbox" name="completed" class="todo-checkbox" ${todo.status ? "checked":""}>
          <button class="delete-todo-button">x</button>
        </div>
      </li>`).join("");
    todos.innerHTML = todoElements
}

export default render
