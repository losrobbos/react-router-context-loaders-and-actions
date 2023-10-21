import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {

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
        <Outlet />
      </main>
    </div>
  );
};
