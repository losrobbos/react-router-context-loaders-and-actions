import { Suspense } from "react";
import { Await, Form, Link, useLoaderData } from "react-router-dom";

const TodosAllResolved = ({ todos }) => {
  const todosList = todos.map((todo) => (
    <div key={todo.id}>
      <span>ID {todo.id} -</span>
      <Link to={`/todos/${todo.id}/edit`}>{todo.title}</Link>
      <span> </span>
      <Form
        style={{ display: "inline-block" }}
        method="POST"
        action={`/todos/${todo.id}/delete`}
      >
        <button type="submit">❌</button>
      </Form>
    </div>
  ));
  return todosList;
};

export const TodosAll = () => {
  const data = useLoaderData();
  const { todos } = data;

  return (
    <>
      <h1>Todos List</h1>
      {/* on first render => show suspense fallback (=> data not ready) */}
      {/* once data ready => resolve it in Await component and render Await children using the resolved data */}
      <Suspense fallback={<h2>Loadin....</h2>}>
        <div className="todos-list">
          <Await resolve={todos}>{(todosResolved) => <TodosAllResolved todos={todosResolved} /> }</Await>
        </div>
      </Suspense>
    </>
  );
};
