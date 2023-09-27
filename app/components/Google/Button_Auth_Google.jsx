"use client";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider , signInWithPopup} from "firebase/auth";

import { Auth } from "@/app/db/db";
function Button_Auth_Google() {
    const HdailGoogleAuth = async () => {
        const provider = await new GoogleAuthProvider();
     
        return signInWithPopup(Auth,provider)

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
