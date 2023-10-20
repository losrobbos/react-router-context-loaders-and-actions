import { Form } from "react-router-dom";

export const TodosAdd = () => {
  return (
    <>
      <h1>Add new Todo</h1>
      <Form method="post">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            defaultValue="Wash the dishes"
          />
        </div>
        <div>
          <input
            type="text"
            name="user"
            placeholder="Username..."
            defaultValue="Rob"
          />
        </div>
        <button type="submit">Add</button>
      </Form>
    </>
  );
};
