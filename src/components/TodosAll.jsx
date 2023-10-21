import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export const TodosAll = () => {
  const data = useLoaderData();
  const { todos } = data

  return (
    <>
      <h1>Todos List</h1>
      {/* on first render => show suspense fallback (=> data not ready) */}
      {/* once data ready => resolve it in Await component and render Await children using the resolved data */}
      <Suspense fallback={<h2>Loadin....</h2>}>
        <div className="todos-list">
          <Await resolve={todos}>
            {(todosResolved) => {
              console.log({todosResolved})
              const todosList = todosResolved.map((todo) => (
                <div key={todo.id}>
                  ID {todo.id} -{" "}
                  <Link to={`/todos/${todo.id}/edit`}>{todo.title}</Link>
                </div>
              ));
              return todosList
            }}
          </Await>
        </div>
      </Suspense>
    </>
  );
};
