import React from 'react' // type "rfc" for react functional componet and vs extension helps create it
import TodoCard from './Todocard'

export default function Todolist(props) {
  const { todos } = props

  return ( // can use the map to code html or jsx once and have it applied to all elements. 
    <ul className='main'> 
      {todos.map((todo, todoIndex) => { 
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
      )
    })}
    </ul>
  )
 }
