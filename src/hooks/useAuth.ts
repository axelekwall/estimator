import { signInAnonymously } from "firebase/auth";
import { useContext } from "react";
import { AuthStateContext } from "../auth";
import { auth } from "../services/firebase";

const useAuth = () => {
  const authState = useContext(AuthStateContext);

  const signInAnon = () =>
    signInAnonymously(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

  return { ...authState, signInAnon };
};

export default useAuth;
