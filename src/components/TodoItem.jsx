import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  return (
    <div
      className={`
        flex items-center gap-3
        px-4 py-3
        rounded-xl
        transition-all
        ${todo.completed
          ? 'bg-green-500/20 border border-green-500/30'
          : 'bg-white/10 border border-white/20'}
      `}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="w-5 h-5 accent-green-500 cursor-pointer"
      />

      {/* Todo Text */}
      <input
        type="text"
        value={todo.todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) =>
          updateTodo(todo.id, { ...todo, todoMsg: e.target.value })
        }
        className={`
          flex-1
          bg-transparent
          text-white
          outline-none
          px-2 py-1
          rounded-lg
          transition
          ${todo.completed ? 'line-through text-gray-400' : ''}
          ${isTodoEditable
            ? 'bg-white text-black border border-gray-300'
            : ''}
        `}
      />

      {/* Edit / Save */}
      <button
        onClick={() => setIsTodoEditable(!isTodoEditable)}
        className="
          px-3 py-1
          rounded-lg
          text-sm font-medium
          bg-blue-500/80 text-white
          hover:bg-blue-600
          active:scale-95
          transition
        "
      >
        {isTodoEditable ? 'Save' : 'Edit'}
      </button>

      {/* Delete */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="
          px-3 py-1
          rounded-lg
          text-sm font-medium
          bg-red-500/80 text-white
          hover:bg-red-600
          active:scale-95
          transition
        "
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
