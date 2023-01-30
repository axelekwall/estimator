import { signInAnonymously } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateContext } from "../auth";
import Button from "../Components/Button";
import { auth } from "../services/firebase";

const LoginPage = () => {
  const { user } = useContext(AuthStateContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  const signInAnon = () =>
    signInAnonymously(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

  return (
    <div>
      <Button onClick={signInAnon}>Login</Button>
    </div>
  );
};

export default LoginPage;
