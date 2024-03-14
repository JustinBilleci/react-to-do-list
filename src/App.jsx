import { useState, useEffect } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() { // function name is always capitalixed just like the component file name(App.jsx)
  
  const [todos, setTodos] = useState([])  // 'setTodos' is a stateful variable
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
    newList }))
  }

  function handleAddTodos(newTodo) {  // adding new todos
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index // if the todo index is not equal to the index then it removes it from the array
    })
    persistData(newTodoList)
    setTodos(newTodoList) // cannot modify todos directly
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
// if wanting to run upon page load, leave array empty
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    
  }, []) // since dependency array empty [] this will run after the page refreshes

  return ( // able to write javascript directly into the html
    <> 
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} /> 
      <Todolist handleEditTodo={handleEditTodo} todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </> // <___ html={js} />
  )
} // one functional component

export default App
