import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => useContext(TodoContext)
