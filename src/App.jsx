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
    setTodos([{id:Date.now(), todoMsg:todo, completed: false}, ...todos])
  }

  const updateTodo = (id, todo) => {
    setTodos(todos.map((t) => t.id === id ? {...todo} : t))
    console.log(todos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((t) => t.id === id ? {...t, completed:!t.completed} : t))

  }
  
  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='flex flex-col items-center w-full h-screen bg-gray-500 '>
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
      
    </TodoContextProvider>
  )
}

export default App
