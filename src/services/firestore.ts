import {
  addDoc,
  collection,
  FirestoreDataConverter,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

interface Session {
  owner?: string;
  created?: Timestamp;
}

const createNewSession = async (userId: string) => {
  const sessionCollection = collection(db, "session").withConverter(
    sessionConverter
  );
  const docRef = await addDoc(sessionCollection, {
    owner: userId,
    created: serverTimestamp(),
  });
  return docRef.id;
};

const sessionConverter: FirestoreDataConverter<Session> = {
  toFirestore: (session) => session,
  fromFirestore: (snap) => {
    const data = snap.data();
    return { owner: data.owner, created: data.created };
  },
};

export { createNewSession, sessionConverter };
export type { Session };
