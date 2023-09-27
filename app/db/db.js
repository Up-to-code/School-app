// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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
export const Auth =getAuth(app)
