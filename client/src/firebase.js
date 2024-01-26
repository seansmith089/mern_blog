
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c601b.firebaseapp.com",
  projectId: "mern-blog-c601b",
  storageBucket: "mern-blog-c601b.appspot.com",
  messagingSenderId: "200003268792",
  appId: "1:200003268792:web:fa4d9566b04c674463044d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
