/* eslint-disable @next/next/no-img-element */
"use client";
import { useContext } from "react";
import { UserContext } from "@/app/context/User_Deta";
import { RiAccountCircleFill } from "react-icons/ri";

function Imgae_of_profile() {
  const UserPhto = useContext(UserContext);
  

  return (
    <div>
      {UserPhto?.photoURL ? (
        <img
          src={UserPhto.photoURL}
          alt="account"
          width={"30"}
          height={"30"}
          className="rounded-full  border    border-red-400"
        />
      ) : (
        <RiAccountCircleFill />
      )}
    </div>
  );
}

export default Imgae_of_profile;
