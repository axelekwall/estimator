import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../services/firebase";

const GitHubProvider = new GithubAuthProvider();

const signIn = () => {
  signInWithRedirect(auth, GitHubProvider, () => {});
};
