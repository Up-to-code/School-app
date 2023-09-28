"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { ChickContext } from "@/app/context/chick";
import Imgae_of_profile from "../Firebase_comp/Imgae_of_profile";
function Menu() {
  const { active, setActive } = useContext(ChickContext);
  const HadelCkick = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <div
      className="font-bold text-xl "
      onClick={(e) => {
        HadelCkick();
      }}
    >
      <div className="flex gap-4 items-center">
        <span className="text-2xl">
          <Imgae_of_profile />
        </span>
        <AiOutlineMenu />
      </div>
    </div>
  );
}

export default Menu;
