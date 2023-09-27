import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Linkes from "./Linkes";
import { MenuProvider } from "@/app/context/chick";

function Navbar() {
  return (
    <MenuProvider>
      <nav className="flex justify-between bg-zinc-50 h-12  items-center px-3">
        <Logo />
        <Linkes />
        <Menu />
      </nav>
    </MenuProvider>
  );
}

export default Navbar;
