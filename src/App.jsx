import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) setTodos(todos)

  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const addTodo = (todo) => {
    if(todo){
      setTodos([{id:Date.now(), todoMsg:todo, completed: false}, ...todos])
    }
    
  }

  const updateTodo = (id, todo) => {
    setTodos(todos.map((t) => t.id === id ? {...todo} : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((t) => t.id === id ? {...t, completed:!t.completed} : t))

  }
 
  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 '>
        <div className='bg-pink-50 m-20 flex flex-col w-170 rounded-2xl shadow-2xl p-6 pt-10 items-center justify-center'>
          <div
          className='p-4 text-6xl font-bold text-violet-900'
          >Todo App</div>
          <TodoForm />
        <ul>
          {
          todos.map((todo)=>
            
              <li key={todo.id}>
                <TodoItem todo={todo}/>
              </li>
            
            
          )
        }
        </ul>
        </div>
        
        
      </div>
      
    </TodoContextProvider>
  )
}

export default App
