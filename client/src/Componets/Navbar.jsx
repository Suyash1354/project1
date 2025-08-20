import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[8vh] flex justify-center items-center font-[Nav] 2xl:text-[1vw] lg:text-[.8vw]">
      <ul className="flex cursor-pointer gap-18">
        <li>Home</li>
        <li>Sync</li>
        <li>Get Started</li>
      </ul>
    </nav>
  );
};

export default Navbar;
