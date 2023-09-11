import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { user, signInAnon } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <Button onClick={signInAnon}>Login</Button>
    </div>
  );
};

export default LoginPage;
