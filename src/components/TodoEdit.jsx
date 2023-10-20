import { Form, useParams } from "react-router-dom";
import { useDataStore } from "../store/store";

export const TodosEdit = () => {
  const { todoId } = useParams();
  const getTodo = useDataStore((state) => state.getTodo);
  const todo = getTodo(todoId);

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
