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

function HomeHeader() {
  return (
    <nav className="absolute inset-x-0 flex justify-center items-center py-10 text-[30px] z-[100]">
      <div className="w-[90%] grid grid-flow-col items-center">
        <div className="logo flex-1">
          <img src="./oaulogo.png" alt="oaulogo" />
        </div>
        <div className="absolute text-[40px] uppercase max-w-[30vw] text-center font-bold text-primaryBlue justify-self-center left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
          OAU TRANSCRIPT RETRIEVAL PORTAL
        </div>
        <Menubar className='justify-self-end'>
          <MenubarMenu>

            <MenubarTrigger>Home</MenubarTrigger>
            <MenubarTrigger className='text-oauOrange'>Search</MenubarTrigger>
            <MenubarTrigger>Results</MenubarTrigger>
            <MenubarTrigger>Log out</MenubarTrigger>
           
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
