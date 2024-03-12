import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() { // function name is always capitalixed just like the component file name(App.jsx)
  
  return ( // able to write javascript directly into the html
    <main> 
      <Todoinput />
      <Todolist />
    </main> // able to put react components directly into html
  )
} // one functional component

export default App
