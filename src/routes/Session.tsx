import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RequiresAuth from "../Components/RequiresAuth";
import { useAuth } from "../hooks/auth";
import { getSession } from "../services/firestore";

const SessionPage = () => {
  const { user } = useAuth();
  const { sessionId } = useParams();
  useEffect(() => {
    if (sessionId) {
      // TODO: Subscribe here
      getSession(sessionId)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [sessionId]);
  return (
    <RequiresAuth>
      <h1>Session</h1>
    </RequiresAuth>
  );
};

export default SessionPage;
