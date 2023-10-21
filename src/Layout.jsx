import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  const [todos, setTodos] = useState([
    {
      id: "t1",
      title: "Do some routing",
      user: "robbos",
    },
    {
      id: "t2",
      title: "Add that todo page",
      user: "umberto",
    },
    {
      title: "Wake the dog",
      user: "Vassilis",
      id: "SbXHbq4",
    },
  ]);

  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos List</NavLink>
          </li>
          <li>
            <NavLink to="/todos/add">Todo Add</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet context={{ todos, setTodos }} />
      </main>
    </div>
  );
};
