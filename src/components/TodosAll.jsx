import { Link } from "react-router-dom";
import { useDataStore } from "../store/store";

export const TodosAll = () => {
  const todos = useDataStore((state) => state.todos);

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
