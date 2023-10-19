import { createBrowserRouter } from "react-router-dom";
import { HomePage, TodosAdd, TodosEdit, TodosAll } from "./components/Pages";
import { Layout } from "./Layout";

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
      },
      {
        path: "todos/edit",
        element: <TodosEdit />,
      },
    ],
  },
]);
