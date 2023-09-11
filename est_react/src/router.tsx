import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
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
      <Route path="/session" loader={() => redirect("/")}></Route>
      <Route path="/session/:sessionId" element={<SessionPage />}></Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

export default router;
