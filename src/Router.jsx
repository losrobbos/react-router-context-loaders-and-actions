import { createBrowserRouter, redirect } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Layout } from "./Layout";
import { TodosAll } from "./components/TodosAll";
import { TodosAdd } from "./components/TodoAdd";
import { TodosEdit } from "./components/TodoEdit";

export const router = createBrowserRouter([
  // LAYOUT
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "todos",
        element: <TodosAll />,
      },
      {
        path: "todos/add",
        element: <TodosAdd />,
        action: async ({ request }) => {
          // wait for sended formdata
          const formData = await request.formData()
          // extract data from formdata collection into an object
          const todoData = Object.fromEntries(formData)
          console.log("[ACTION] Data received:", todoData)

          // TODO: create entry at API

          // redirect to todo list and wait there for auto refresh of all todos...
          // TODO: pass the new data along... (in context??)
          return redirect("/todos")
        }
      },
      {
        path: "todos/:todoId/edit",
        element: <TodosEdit />,
        action: async ({ request, params }) => {
          const formData = await request.formData()
          // extract form data into object
          const todoUpdated = Object.fromEntries(formData)
          Object.assign(todoUpdated, { id: params.todoId })

          console.log("[EDIT] FormData", todoUpdated)
          return redirect("/todos")
        }
      },
    ],
  },
]);
