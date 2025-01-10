

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCziosJ0e-T3i9cWO_8gfc17rm5iKLe1x4",
  authDomain: "react-router-7119c.firebaseapp.com",
  projectId: "react-router-7119c",
  storageBucket: "react-router-7119c.firebasestorage.app",
  messagingSenderId: "12543418049",
  appId: "1:12543418049:web:da384cffa798d81dc03e40",
  measurementId: "G-04EC4BXS7M"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app)
export default app;