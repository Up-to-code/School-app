"use client"
import { createContext, useState } from "react";

export const ChickContext = createContext();

export const MenuProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <ChickContext.Provider value={{ active, setActive }}>
      {children}
    </ChickContext.Provider>
  );
};
