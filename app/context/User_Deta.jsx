"use client"
import { createContext, useState } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth } from "../db/db";

export const UserContext = createContext()


function User_Deta({children}) {

 const [user, loading, error] = useAuthState(Auth);


   
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default User_Deta