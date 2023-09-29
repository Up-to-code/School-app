/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/context/User_Deta";
import { useEffect } from "react";


export const Route_t = () => {
  const user = useContext(UserContext);


  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/Home");
    } else {
      router.push("/");
    }
  }, [user]);

};
