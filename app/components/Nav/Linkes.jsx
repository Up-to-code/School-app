"use client";
import { ChickContext } from "@/context/chick";
import { useContext } from "react";
import Link from "next/link";
import {  AiOutlineSetting} from "react-icons/ai";
import { GoHome } from "react-icons/go"

function Linkes() {
  const { active } = useContext(ChickContext);

  return (
    <div>
      <div>
        <div
          className={
            "absolute  z-20 top-12 bg-zinc-100  w-48  h-screen    right-0  flex-col flex gahover:p-2 red text-center py-2  overflow-hidden  t-all  " +
            (active ? "  right-0   " : "right-[-180px]    opacity-0 ")
          }
        >
          <Link
            href={"/Home"}
            className="font-bold  py-2  mt-1 hover:bg-red-500 hover:text-zinc-50   t-all flex gap-2 w-full items-center justify-center"
          >
            <span className="text-lg ">
              <GoHome />
            </span>
            Home
          </Link>
          <Link
            href={"/Home"}
            className="font-bold  py-2  mt-1 hover:bg-red-500 hover:text-zinc-50   t-all flex gap-2 w-full items-center justify-center"
          >
            <span className="text-lg ">
            <AiOutlineSetting/>
            </span>
            Home
          </Link>
          <Link
            href={"/Home"}
            className="font-bold  py-2  mt-1 hover:bg-red-500 hover:text-zinc-50   t-all flex gap-2 w-full items-center justify-center"
          >
            <span className="text-lg ">
        
            </span>
            Home
          </Link>
          <Link
            href={"/Home"}
            className="font-bold  py-2  mt-1 hover:bg-red-500 hover:text-zinc-50   t-all flex gap-2 w-full items-center justify-center"
          >
            <span className="text-lg ">
        
            </span>
            Home
          </Link>
          <Link
            href={"/Home"}
            className="font-bold  py-2  mt-1 hover:bg-red-500 hover:text-zinc-50   t-all flex gap-2 w-full items-center justify-center"
          >
            <span className="text-lg ">
         
            </span>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Linkes;
