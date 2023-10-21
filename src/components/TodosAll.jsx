import { Link, useLoaderData } from "react-router-dom";

export const TodosAll = () => {
  const todos = useLoaderData()

  // todos might not be fetch yet
  // handle it with Async Component and Suspense fallback...

  const todosList = todos.map((todo) => (
    <div key={todo.id}>
      ID {todo.id} - <Link to={`/todos/${todo.id}/edit`}>{todo.title}</Link>
    </div>
  ));

  return (
    <>
      <h1>Todos List</h1>
      <div className="todos-list">{todosList}</div>
    </>
  );
};
