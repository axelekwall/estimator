import { FC, ReactElement, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateContext } from "../auth";

const RequiresAuth: FC<{ children: ReactElement }> = ({ children }) => {
  const { user, initialized } = useContext(AuthStateContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && initialized) {
      navigate("/login");
    }
  }, [user, initialized]);
  if (!initialized) return null;
  return children;
};

export default RequiresAuth;
