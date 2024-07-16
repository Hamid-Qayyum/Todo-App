const store = {
    todos: [

    ]
  };
  const handler ={
    get:(target,prop)=>{
      return target[prop]
    },
    set:(target,prop,value)=>{
      target[prop] = value
      if(prop ==="todos"){
         window.dispatchEvent(new Event("todosChange"))
      }
      localStorage.setItem("store", JSON.stringify(store))
      return true
    },
  }
  // creating proxy object.....
  const storeProxy = new Proxy(store,handler);

  // function for adding todo....

  function addTodo(newtodo){
    storeProxy.todos = [...storeProxy.todos, newtodo];
  }
// Delete todo function
  function removeItemTodo(todoToBeDeleted){
    storeProxy.todos.forEach((element) => {
         if(element.id == todoToBeDeleted){
         const newArray =  storeProxy.todos.filter(el => el.id !== element.id)
          storeProxy.todos = [...newArray]
         }
    });
  }
function toogleCompleted(id,completed){
  const toggledTodo = storeProxy.todos.map(element => {
    if(element.id === id){
        return {...element, status:completed}
    }
    else{
        return element
    }
});
storeProxy.todos = toggledTodo
}

  // exporting functions and proxy ........
  export {addTodo , removeItemTodo, toogleCompleted}
  export default storeProxy;