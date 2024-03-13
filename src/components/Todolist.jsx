import React from 'react' // type "rfc" for react functional componet and vs extension helps create it

export default function Todolist() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vegetables',
    'Practice coding'
  ]

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => { // can use the map to code html or jsx once and have it applied to all elements.
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
      )
    })}
    </ul>
  )
 }
