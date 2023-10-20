import { create } from "zustand";

export const useDataStore = create((set, get) => ({
  todos: [
    { id: "t1", title: "Do some routing", user: "rob" },
    { id: "t2", title: "Add that todo page", user: "dominik" },
  ],
  getTodo: (todoId) => get().todos.find(todo => todo.id === todoId),
  addTodo: (todoNew) => set((state) => ({ todos: [...state.todos, todoNew] }))
}))