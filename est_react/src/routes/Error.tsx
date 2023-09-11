import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3>Error</h3>
      <i>{JSON.stringify(error)}</i>
    </div>
  );
};

export default ErrorPage;
