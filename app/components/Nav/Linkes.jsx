"use client"
import { ChickContext } from "@/app/context/chick";
import { useContext } from "react";
import Link from "next/link";

function Linkes() {
    const { active } = useContext(ChickContext);

  return (
    <div>
      <div>
        <div className={("absolute  z-20 top-12 bg-zinc-100  w-48  h-screen    right-0  flex-col flex gahover:p-2 red text-center py-2  overflow-hidden  t-all  ") + (active? "  right-0   ":"right-[-180px]    opacity-0 ")}>
          <Link href={"/Home"} className="py-2  mt-1 hover:bg-red-500 t-all" >Home</Link>
          <Link href={"/"} className="py-2  mt-1 hover:bg-red-500 t-all" >test one</Link>
          <Link href={"/"} className="py-2  mt-1 hover:bg-red-500 t-all" >test row</Link>
          <Link href={"/"} className="py-2  mt-1 hover:bg-red-500 t-all" >About us</Link>
        </div>
      </div>
    </div>
  );
}

export default Linkes;
