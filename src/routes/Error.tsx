import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h3>Error</h3>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;
