import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todoMsg.trim()) return
    addTodo(todoMsg)
    setTodoMsg("")
  }

  return (
    <form
      onSubmit={add}
      className="flex items-center gap-3 w-full"
    >
      {/* Input */}
      <input
        type="text"
        placeholder="What do you want to do today?"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className="
          flex-1
          px-4 py-3
          rounded-xl
          bg-white/90
          text-gray-800
          placeholder-gray-400
          outline-none
          border border-gray-300
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-400/40
          transition
        "
      />

      {/* Button */}
      <button
        type="submit"
        className="
          px-5 py-3
          rounded-xl
          bg-gradient-to-r from-blue-500 to-indigo-600
          text-white font-medium
          shadow-lg
          hover:from-blue-600 hover:to-indigo-700
          active:scale-95
          transition
        "
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
