import { useState } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() { // function name is always capitalixed just like the component file name(App.jsx)
  
  const [todos, setTodos] = useState([]) // 'setTodos' is a stateful variable

  function handleAddTodos(newTodo) {  // adding new todos
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index // if the todo index is not equal to the index then it removes it from the array
    })
    setTodos(newTodoList) // cannot modify todos directly
  }

  function handleEditTodo(index) {

  }

  return ( // able to write javascript directly into the html
    <> 
      <Todoinput handleAddTodos={handleAddTodos} /> 
      <Todolist todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </> // <___ html={js} />
  )
} // one functional component

export default App
