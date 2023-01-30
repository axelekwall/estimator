import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./services/firebase";

type AuthState = {
  user: User | null;
  initialized: boolean;
};

const defaultAuthState: AuthState = {
  initialized: false,
  user: null,
};

const AuthStateContext = createContext<AuthState>(defaultAuthState);

const useAuthState = (): AuthState => {
  const [user, setUser] = useState<User | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
      setInitialized(true);
    });
    return unSub;
  }, []);
  return { user, initialized };
};

export { AuthStateContext, useAuthState };
export type { AuthState };
