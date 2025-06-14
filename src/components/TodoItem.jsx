import React, { useState } from 'react'
import {useTodo} from '../context/TodoContext'

function TodoItem({todo}) {
  console.log(todo)
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const {todos, updateTodo, deleteTodo, toggleComplete} = useTodo()
  
  return (
    <div>
      <div className={(() => `m-2 px-4 rounded-xl ${todo.completed ? "bg-red-300" : "bg-green-300"}`)()} >
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
        <button type="button"
        className='py-0.5 px-1 m-4 bg-white rounded-xs'
        onClick={() => setIsTodoEditable(!isTodoEditable)}
        >
          {isTodoEditable ? "Save" : "Edit" }
        </button>
        <button type="button"
        className='px-1 py-0.5 bg-red-500 rounded-xs'
        onClick={() => {
          deleteTodo(todo.id)
        }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
