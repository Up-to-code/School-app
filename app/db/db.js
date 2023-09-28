import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "dotenv/config"
/*
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DPMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,

*/

const firebaseConfig = {
  apiKey: "AIzaSyCBcfSxKljnhvsFNu8tblmWDeXiyir_urE",
  authDomain: "the-schoole.firebaseapp.com",
  projectId: "the-schoole",
  storageBucket: "the-schoole.appspot.com",
  messagingSenderId: "22940945203",
  appId: "1:22940945203:web:48e1fb8752aa1aa7b7cc46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
