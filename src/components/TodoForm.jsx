import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("")
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()
    addTodo(todoMsg)
    setTodoMsg("")
  }
  //
  return (
   
        <form onSubmit={add} className=''>
          <input type="text"
          className='h-11 w-125 mr-4 border-gray-400 border-1 shadow-gray-400 shadow-sm p-2 mb-8 rounded-md bg-white'
          placeholder='Add a todo...'
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          />
          <button type='submit'
          className='px-5 py-2 h-11.5 w-21 font-semibold rounded-md text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 hover:brightness-110 transition duration-300 shadow-md'
          >
            Add
          </button>
        </form>
      
  )
}

export default TodoForm
