import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { Session, sessionConverter } from "../services/firestore";

const useSession = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState<Session>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (loaded && !session) {
      throw new Error("Session not found");
    }
  }, [loaded, session]);

  useEffect(() => {
    if (!sessionId) return;
    const docRef = doc(db, "session", sessionId).withConverter(
      sessionConverter
    );
    const unSub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setSession(docSnap.data());
      } else {
        setSession(undefined);
      }
      setLoaded(true);
    });
    return unSub;
  }, [sessionId]);
  return session;
};

export default useSession;
