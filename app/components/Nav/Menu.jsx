"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { ChickContext } from "@/app/context/chick";
import { Auth, app } from "@/app/db/db";
function Menu() {
  const { active, setActive } = useContext(ChickContext);
  const HadelCkick = () => {
    active ? setActive(false) : setActive(true);
    console.log(console.log(active));
  };
const [User,setUser] = useState()

useEffect(() => {

}, [])

  return (
    <div
      className="font-bold text-xl "
      onClick={(e) => {
        HadelCkick();
      }}
    >
      <AiOutlineMenu />
    </div>
  );
}

export default Menu;
