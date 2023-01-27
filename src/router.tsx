import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorPage from "./routes/Error";
import SessionPage from "./routes/Session";
import LoginPage from "./routes/Login";
import Layout from "./Components/Layout";
import StartPage from "./routes/Start";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="" element={<StartPage />} />
      <Route path="/session" element={<SessionPage />}></Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

export default router;
