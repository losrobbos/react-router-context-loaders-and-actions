import { createContext, useContext, useState } from "react";

const Context = createContext({})

export const useDataContext = () => {
  return useContext(Context)
}

export const DataProvider = ({ children }) => {

    const [todos, setTodos] = useState([
    {
      id: "t1",
      title: "Do some routing",
      user: "robbos",
    },
    {
      id: "t2",
      title: "Add that todo page",
      user: "umberto",
    },
  ]);

  const getTodoById = (todoId) => {
    return todos.find(todo => todo.id === todoId)
  }

  const updateTodo = (todoUpdated) => {
    const todosUpdated = todos.map(todo => todo.id === todoUpdated.id ? todoUpdated : todo)
    setTodos(todosUpdated)
  }

  const deleteTodo = (todoId) => {
    const todosKeep = todos.filter(todo => todo.id !== todoId)
    setTodos(todosKeep)
  }

  const sharedData = {
    todos, 
    setTodos,
    getTodoById,
    updateTodo, 
    deleteTodo
  }

  return (
    <Context.Provider value={sharedData}>
      { children }
    </Context.Provider>
  )
}

