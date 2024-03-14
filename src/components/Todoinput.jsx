import { useState } from "react"

export default function Todoinput(props) {
    const {handleAddTodos} = props

    const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter to-do..."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('') // resets new to-do bar to no value
            }}>Add</button>
        </header>
    )
}