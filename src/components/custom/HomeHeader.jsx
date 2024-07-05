"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { useNavigate, Link } from "react-router-dom";

function HomeHeader() {
  const navigate = useNavigate();
  const navItems = ["Home", "Results", "Upload", "Log out"];

  return (
    <nav className="absolute inset-x-0 flex justify-center items-center py-10 text-xl 2xl:text-[28px] z-[100]">
      <div className="w-[98%] grid grid-flow-col items-center">
        <div className="logo flex-1">
          <img
            src="/oaulogo.png"
            className="w-[100px] 2xl:w-[116px]"
            alt="oaulogo"
          />
        </div>
        <Link
          to={"/search"}
          className="h2 absolute flex flex-col items-center text uppercase w-[40vw] text-center font-bold justify-self-center left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
        >
          <span>OAU TRANSCRIPT</span>
          <span>RETRIEVAL PORTAL</span>
        </Link>
        <Menubar className="justify-self-end">
          <MenubarMenu>
            <Link to={'/'} className="flex font-bold h-10 items-center text-primaryBlue space-x-1 rounded-md p-1">Home</Link>
            <Link to={'/results'} className="flex font-bold h-10 items-center text-primaryBlue space-x-1 rounded-md p-1">Results</Link>
            <Link to={'/upload'} className="flex font-bold h-10 items-center text-primaryBlue space-x-1 rounded-md p-1">Upload</Link>
            <Link to={'/'} className="flex font-bold h-10 items-center text-primaryBlue space-x-1 rounded-md p-1">Log Out</Link>
          </MenubarMenu>
        </Menubar>
        {/* <ul className="navitems flex gap-4 text-primaryBlue font-bold">
          <li>About</li>
          <span className="text-oauOrange">/</span>
          <li>Contact</li>
        </ul> */}
      </div>
    </nav>
  );
}

export default HomeHeader;
