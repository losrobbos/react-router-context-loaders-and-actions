import { Link, useLoaderData } from "react-router-dom";

export const TodosAll = () => {
  const todos = useLoaderData()

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
