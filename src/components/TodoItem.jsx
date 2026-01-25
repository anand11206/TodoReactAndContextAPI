import React, { useState } from 'react'
import {useTodo} from '../context/TodoContext'

function TodoItem({todo}) {
  
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const {todos, updateTodo, deleteTodo, toggleComplete} = useTodo()
  
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


// import React, { useState } from 'react'
// import { useTodo } from '../context/TodoContext'
// import { motion } from 'framer-motion'
// function TodoItem({ todo }) {
//   const [isTodoEditable, setIsTodoEditable] = useState(false)
//   const { updateTodo, deleteTodo, toggleComplete } = useTodo()
//   const [editMsg, setEditMsg] = useState(todo.todoMsg)

//   const handleSave = () => {
//     updateTodo(todo.id, { ...todo, todoMsg: editMsg })
//     setIsTodoEditable(false)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, y: -30, scale: 0.95 }}
//       layout
//       transition={{ type: "spring", stiffness: 400, damping: 30 }}
//       className={`flex items-center justify-between bg-white/90 rounded-xl shadow-md px-4 py-3 transition-all duration-200 ${todo.completed ? "opacity-60" : ""}`}
//     >
//       <div className="flex items-center gap-3">
//         <input
//           type="checkbox"
//           checked={todo.completed}
//           onChange={() => toggleComplete(todo.id)}
//           className="accent-indigo-500 w-5 h-5"
//         />
//         {isTodoEditable ? (
//           <motion.input
//             key="edit"
//             type="text"
//             value={editMsg}
//             onChange={(e) => setEditMsg(e.target.value)}
//             className="border-b-2 border-indigo-400 bg-transparent outline-none text-lg px-2"
//             autoFocus
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.95, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           />
//         ) : (
//           <motion.span
//             key="view"
//             className={`text-lg ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.95, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {todo.todoMsg}
//           </motion.span>
//         )}
//       </div>
//       <div className="flex items-center gap-2">
//         {isTodoEditable ? (
//           <button
//             onClick={handleSave}
//             className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-700 transition"
//             title="Save"
//           >
//             💾
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsTodoEditable(true)}
//             className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 transition"
//             title="Edit"
//           >
//             ✏️
//           </button>
//         )}
//         <button
//           onClick={() => deleteTodo(todo.id)}
//           className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-700 transition"
//           title="Delete"
//         >
//           🗑️
//         </button>
//       </div>
//     </motion.div>
//   )
// }

// export default TodoItem


// import React, { useState } from 'react'
// import { useTodo } from '../context/TodoContext'

// function TodoItem({ todo }) {
//   const [isTodoEditable, setIsTodoEditable] = useState(false)
//   const { updateTodo, deleteTodo, toggleComplete } = useTodo()
//   const [editMsg, setEditMsg] = useState(todo.todoMsg)

//   const handleSave = () => {
//     updateTodo(todo.id, { ...todo, todoMsg: editMsg })
//     setIsTodoEditable(false)
//   }

//   return (
//     <div className={`flex items-center justify-between bg-white/90 rounded-xl shadow-md px-4 py-3 transition-all duration-200 ${todo.completed ? "opacity-60" : ""}`}>
//       <div className="flex items-center gap-3">
//         <input
//           type="checkbox"
//           checked={todo.completed}
//           onChange={() => toggleComplete(todo.id)}
//           className="accent-indigo-500 w-5 h-5"
//         />
//         {isTodoEditable ? (
//           <input
//             type="text"
//             value={editMsg}
//             onChange={(e) => setEditMsg(e.target.value)}
//             className="border-b-2 border-indigo-400 bg-transparent outline-none text-lg px-2"
//             autoFocus
//           />
//         ) : (
//           <span className={`text-lg ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
//             {todo.todoMsg}
//           </span>
//         )}
//       </div>
//       <div className="flex items-center gap-2">
//         {isTodoEditable ? (
//           <button
//             onClick={handleSave}
//             className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-700 transition"
//             title="Save"
//           >
//             💾
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsTodoEditable(true)}
//             className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 transition"
//             title="Edit"
//           >
//             ✏️
//           </button>
//         )}
//         <button
//           onClick={() => deleteTodo(todo.id)}
//           className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-700 transition"
//           title="Delete"
//         >
//           🗑️
//         </button>
//       </div>
//     </div>
//   )
// }

// export default TodoItem


