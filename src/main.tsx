import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Start from "./routes/Start";
import "./index.css";
import ErrorPage from "./routes/Error";
import Session from "./routes/Session";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Start />} errorElement={<ErrorPage />}>
      <Route path="/session" element={<Session />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
