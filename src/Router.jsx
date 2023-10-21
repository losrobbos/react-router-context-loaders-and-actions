import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./components/HomePage";
import { TodosAll } from "./components/TodosAll";
import { TodosAdd } from "./components/TodoAdd";
import { TodosEdit } from "./components/TodoEdit";
import { ErrorPage } from "./components/ErrorPage";
import { useDataContext } from "./store/DataProvider";

export const Router = () => {
  // load context data
  const { todos, setTodos, getTodoById, updateTodo, deleteTodo } =
    useDataContext();

  // now all loaders and actions have access to context items!
  const router = createBrowserRouter([
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
          errorElement: <ErrorPage />,
          loader: async () => {
            console.log("[TODOS all] Loader");
            // render blocking data loading (only once data is READY, we will pass it to the component to render)
            // return fetch("http://localhost:5000/todos");

            // NON render blocking data loading using defer
            return { todos };
          },
        },
        {
          path: "todos/add",
          element: <TodosAdd />,
          errorElement: <ErrorPage />,
          action: async ({ request }) => {
            // wait for sended formdata
            const formData = await request.formData();
            // extract data from formdata collection into an object
            const todoData = Object.fromEntries(formData);
            console.log("[TODO Add ACTION] Data received:", todoData);
            // add random ID
            Object.assign(todoData, { id: Date.now().toString() });

            // create entry at API
            setTodos([...todos, todoData]);

            // redirect to todo list and wait there for auto refresh of all todos...
            return redirect("/todos");
          },
        },
        {
          path: "todos/:todoId/delete",
          element: <div>Deleting...</div>,
          action: ({ params }) => {
            // delete todo from store and return to list
            console.log("[ACTION Todo Delete]");
            const { todoId } = params;
            deleteTodo(todoId);
            return redirect("/todos")
          },
        },
        {
          path: "todos/:todoId/edit",
          element: <TodosEdit />,
          loader: async ({ params }) => {
            console.log("[TODO EDIT] loader", params);
            // fetch TODO item from context
            // pass todo item over to component
            return getTodoById(params.todoId);
          },
          action: async ({ request, params }) => {
            const formData = await request.formData();
            // extract form data into object
            const todoUpdated = Object.fromEntries(formData);
            // Object.assign(todoUpdated, { id: params.todoId })
            console.log("[TODO EDIT ACTION] data received", todoUpdated);

            // update item in context
            updateTodo({ ...todoUpdated, id: params.todoId });

            return redirect("/todos");
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
