import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const RequiresAuth: FC<{ children: ReactElement }> = ({ children }) => {
  const { user, initialized } = useAuth();
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
