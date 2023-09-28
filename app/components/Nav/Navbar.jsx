import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Linkes from "./Linkes";
import { MenuProvider } from "@/app/context/chick";

function Navbar() {
  return (
    <MenuProvider>
      <div className="h-[80px] ">
        <div className="h-10 z-10 items-center justify-between bg-zinc-950 px-10 text-white      max-w-5xl flex  fixed w-full ">
          <p className="font-bold ">This site for Up-to-code</p>
          <div className="flex gap-2">
            <p className="font-medium ">
              My Github
            </p>
            <a href="https://github.com/Up-to-code" className="font-bold text-blue-800 "> Show</a>
          </div>
        </div>
      </div>
      <nav className="z-10  top-10  max-w-5xl flex justify-between bg-zinc-50 h-12  items-center px-3 fixed w-full shadow">
        <Logo />
        <Linkes />
        <Menu />
      </nav>
    </MenuProvider>
  );
}

export default Navbar;
