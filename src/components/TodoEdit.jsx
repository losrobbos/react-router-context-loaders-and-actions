import { Form, useLoaderData } from "react-router-dom";

export const TodosEdit = () => {
  const todo = useLoaderData()

  return (
    <>
      <h1>Edit Todo #{todo.id}</h1>
      <Form method="POST">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            defaultValue={todo.title}
          />
        </div>
        <div>
          <input
            type="text"
            name="user"
            placeholder="Username..."
            defaultValue={todo.user}
          />
        </div>
        <button type="submit">Update</button>
      </Form>
    </>
  );
};
