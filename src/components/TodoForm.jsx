import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("")
  const {todos, addTodo, updateTodo, deleteTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()
    addTodo(todoMsg)
    setTodoMsg("")
  }
  return (
    <div className=''>
      <div className='p-4'>
        <form onSubmit={add} className=' mt-20'>
          <input type="text"
          className='h-10 w-80 border-black border-1 p-2 bg-white'
          placeholder='Add a todo'
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          />
          <button type='submit'
          className='px-4 py-2 rounded-r-lg bg-blue-500 text-white'
          >
            Add
          </button>
        </form>
      </div>

    </div>
  )
}

export default TodoForm
