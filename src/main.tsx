import { FC, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "normalize.css";
import router from "./router";
import { AuthStateContext, useAuthState } from "./auth";

const App: FC = () => {
  const authState = useAuthState();
  return (
    <StrictMode>
      <AuthStateContext.Provider value={authState}>
        <RouterProvider router={router} />
      </AuthStateContext.Provider>
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
