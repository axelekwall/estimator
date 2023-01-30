import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
  signInWithRedirect,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

const GitHubProvider = new GithubAuthProvider();

// TODO: create auth provider to not have multiple listeners.
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  const signInGithub = () => signInWithRedirect(auth, GitHubProvider, () => {});

  const signInAnon = () =>
    signInAnonymously(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

  const signOutUser = () => signOut(auth);

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

  return { initialized, user, signInAnon, signInGithub, signOutUser };
};
