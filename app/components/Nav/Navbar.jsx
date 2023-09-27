import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function Navbar() {
  return (
    <nav className="flex justify-between bg-zinc-50 h-12  items-center px-3">
     <Logo/>
      <Menu/>
    </nav>
  );
}

export default Navbar;
