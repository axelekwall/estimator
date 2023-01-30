import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

const createNewSession = async (userId: string) => {
  const sessionCollection = collection(db, "session");
  const docRef = await addDoc(sessionCollection, {
    owner: userId,
    created: serverTimestamp(),
  });
  return docRef.id;
};

const getSession = async (sessionId: string) => {
  const docRef = doc(db, "session", sessionId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const docData = docSnap.data();
    console.log(docData);
    return docData;
  } else {
    console.log("Session does not exist");
  }
};

export { createNewSession, getSession };
