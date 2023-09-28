"use client"
import { createContext, useState } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { Auth } from "../db/db";

export const UserContext = createContext()


function User_Deta({children}) {
 const [user ,setUser] = useState()    

onAuthStateChanged(Auth, (user) => {
   
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const USER = user;
      setUser(USER)

    } else {

    }
  });

   
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default User_Deta