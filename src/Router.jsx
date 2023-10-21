import {
  createBrowserRouter,
  defer,
  redirect,
} from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./components/HomePage";
import { TodosAll } from "./components/TodosAll";
import { TodosAdd } from "./components/TodoAdd";
import { TodosEdit } from "./components/TodoEdit";
import { ErrorPage } from "./components/ErrorPage";

export const router = createBrowserRouter([
  // LAYOUT
  {
    path: "/",
    element: <Layout />,
    errorElement: <div style={{ color: "red" }}>Autsch! General ERROR!</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "todos",
        element: <TodosAll />,
        loader: async () => {
          console.log("[TODOS all] Loader");
          // render blocking data loading (only once data is READY, we will pass it to the component to render) 
          // return fetch("http://localhost:5000/todos");

          // NON render blocking data loading using defer
          return defer({
            todos: fetch("http://localhost:5000/todos").then(resp => resp.json())
          });
        },
        errorElement: <ErrorPage />,
      },
      {
        path: "todos/add",
        element: <TodosAdd />,
        action: async ({ request }) => {
          // wait for sended formdata
          const formData = await request.formData();
          // extract data from formdata collection into an object
          const todoData = Object.fromEntries(formData);
          console.log("[TODO Add ACTION] Data received:", todoData);

          // create entry at API
          await fetch(`http://localhost:5000/todos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoData),
          });

          // redirect to todo list and wait there for auto refresh of all todos...
          return redirect("/todos");
        },
      },
      // delete route
      {
        path: "todos/:todoId/delete",
        loader: async({ params }) => {
          // TODO: delete todo from API and return to list
          console.log(params)
          return redirect("/todos")
        }
      },
      {
        path: "todos/:todoId/edit",
        element: <TodosEdit />,
        loader: async ({ params }) => {
          console.log("[TODO EDIT] loader", params);
          // fetch TODO item from API
          // pass todo item over to component
          return fetch(`http://localhost:5000/todos/${params.todoId}`);
          // return { id: params.todoId }
        },
        action: async ({ request, params }) => {
          const formData = await request.formData();
          // extract form data into object
          const todoUpdated = Object.fromEntries(formData);
          // Object.assign(todoUpdated, { id: params.todoId })
          console.log("[TODO EDIT ACTION] data received", todoUpdated);

          // TODO: update item at API
          await fetch(`http://localhost:5000/todos/${params.todoId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoUpdated),
          });

          return redirect("/todos");
        },
      },
    ],
  },
]);
