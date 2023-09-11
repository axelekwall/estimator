import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBWiYjHFlvBGdNrP4DVjWLQmbT1GtJ7MRA",
  authDomain: "estimator-444e0.firebaseapp.com",
  projectId: "estimator-444e0",
  storageBucket: "estimator-444e0.appspot.com",
  messagingSenderId: "823219099774",
  appId: "1:823219099774:web:8379e72cbcf4c8ee4fa02f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
