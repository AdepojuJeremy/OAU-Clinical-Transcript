import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

function HomeHeader() {
  const navItems = ["Home", "Search", "Results", "Log out"];
  return (
    <nav className="absolute inset-x-0 flex justify-center items-center py-10 text-xl 2xl:text-[28px] z-[100]">
      <div className="w-[98%] grid grid-flow-col items-center">
        <div className="logo flex-1">
          <img
            src="./oaulogo.png"
            className="w-[100px] 2xl:w-[116px]"
            alt="oaulogo"
          />
        </div>
        <Link
          href={"/home"}
          className="absolute flex flex-col items-center text-[32px]/[3rem] 2xl:text-[40px] text uppercase w-[40vw] text-center font-bold text-primaryBlue justify-self-center left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
        >
          <span>OAU TRANSCRIPT</span>
          <span>RETRIEVAL PORTAL</span>
        </Link>
        <Menubar className="justify-self-end">
          <MenubarMenu>
            {navItems.map((item, i) => {
              return <MenubarTrigger>{item}</MenubarTrigger>;
            })}
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
