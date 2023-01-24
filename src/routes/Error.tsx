import { useRouteError } from "react-router-dom";

type RouterError = {
  statusText?: string;
  message?: string;
};

function isRouteError(error: unknown): error is RouterError {
  return (
    (error as RouterError).message !== undefined ||
    (error as RouterError).statusText !== undefined
  );
}

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h3>Error</h3>
      {isRouteError(error) && <i>{error.statusText || error.message}</i>}
    </div>
  );
};

export default ErrorPage;
