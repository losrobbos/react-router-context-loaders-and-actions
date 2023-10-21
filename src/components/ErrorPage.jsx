import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ color: "red" }}>
      <h2>Autsch!</h2>
      <div>{error.message}</div>
    </div>
  );
};
