"use client";
import { Auth } from "@/app/db/db";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "@/app/db/db";
export const ChickData = async () => {
  const [user, loading, error] = useAuthState(Auth);
  if (user) {
    const data = doc(db, "users",user.uid);
    const docSnap = await getDoc(data);
   const uid = user?.uid
  
      if (docSnap.exists()) {
     
      return true
      } else {
        await setDoc(doc(db, "users", uid), {
          Name: user.displayName,
          Email: user.email,
          PhtoURL: user.photoURL,
          Admin: false,
          techer: false,
        });
      }
    }
  }

