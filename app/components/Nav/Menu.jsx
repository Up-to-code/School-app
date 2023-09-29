"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { ChickContext } from "@/context/chick";
import Imgae_of_profile from "../Firebase_comp/Imgae_of_profile";
import { UserContext } from "@/context/User_Deta";
import Link from "next/link";

function Menu() {
  const { active, setActive } = useContext(ChickContext);
  const user = useContext(UserContext);
  const HadelCkick = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <div className="font-bold text-xl ">
      <div className="flex gap-4 items-center">
        <span className="text-2xl">
          <Link href={user ? ("/Accunet/" + user.uid ): "/error"}>
            <Imgae_of_profile />
          </Link>
        </span>
        <div
          onClick={(e) => {
            HadelCkick();
          }}
        >
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
}

export default Menu;
