import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([{ id: Date.now(), todoMsg: todo, completed: false }, ...todos])
  }

  const updateTodo = (id, todo) => {
    setTodos(todos.map((t) => t.id === id ? { ...todo } : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {/* Background */}
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-4">

        {/* Main Card */}
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10">

          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
            ✨ My Todo List
          </h1>

          {/* Form */}
          <TodoForm />

          {/* Divider */}
          <div className="my-5 h-px bg-white/20" />

          {/* Todo List */}
          <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {todos.length === 0 && (
              <p className="text-center text-gray-400 text-sm">
                No tasks yet. Add one above 👆
              </p>
            )}

            {todos.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
