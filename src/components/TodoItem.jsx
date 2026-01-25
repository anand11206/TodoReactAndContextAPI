import React, { useState } from 'react'
import {useTodo} from '../context/TodoContext'

function TodoItem({todo}) {
  
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()
  
  return (
    
      <div className={(() => `m-2 px-4 h-14.5 mb-4 flex items-center justify-between shadow-gray-400 shadow-sm rounded-xl w-150 bg-white`)()} >
        <div >
          <input type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        />
        <input type="text"
        value={todo.todoMsg}
        className={(() => (`w-auto rounded-xs pl-1 ml-1 ${isTodoEditable ? "border-black border-1 bg-white" : ""} ${todo.completed ? "line-through" : ""}`))()}
        onChange={(e) => {
          updateTodo(todo.id, {...todo, todoMsg:e.target.value})
        }}
        readOnly={!isTodoEditable}
        />
        </div>
       <div>
         <button type="button"
        className='py-0.5 px-1 m-4 w-10 h-10 rounded-full bg-white '
        onClick={() => setIsTodoEditable(!isTodoEditable)}
        >
          {isTodoEditable ? "S" : "E" }
        </button>
        <button type="button"
        className='px-1 py-0.5 w-10 h-10 rounded-full bg-red-500'
        onClick={() => {
          deleteTodo(todo.id)
        }}
        >
          D
        </button>
       </div>
      </div>
    
  )
}

export default TodoItem
