"use client";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Auth } from "@/app/db/db";

function Button_Auth_Google() {
  const provider = new GoogleAuthProvider();

  const HdailGoogleAuth = async () => {
    try {
      const result =await signInWithPopup(Auth, provider);
      console.log(result.user)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className="bg-zinc-900 font-semibold px-4 t rounded-md flex gap-2 items-center py-2 "
        onClick={() => {
          HdailGoogleAuth();
        }}
      >
        <FaGoogle />
        Google
      </button>
    </div>
  );
}

export default Button_Auth_Google;
