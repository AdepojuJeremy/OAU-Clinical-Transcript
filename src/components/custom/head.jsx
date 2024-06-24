import React from "react";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarContent,
} from "../ui/menubar";
import { useNavigate, Link } from "react-router-dom";

function HomeHeader() {
  const navigate = useNavigate()
  const navItems = ["Home", "Results", "Upload", "Log out"];

  // const isActive = (path) => {
  //   return router.pathname === path;
  // };

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
          href={"/search"}
          className="absolute flex flex-col items-center text-[32px]/[3rem] 2xl:text-[40px] text uppercase w-[40vw] text-center font-bold justify-self-center left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
        >
          <span>OAU TRANSCRIPT</span>
          <span>RETRIEVAL PORTAL</span>
        </Link>
        <Menubar className="justify-self-end">
          <MenubarMenu>
            <MenubarContent>
              {navItems.map((item, i) => {
                const path = `/${item.toLowerCase()}`;
                return (
                  <MenubarItem key={i} className=''>
                    <Link href={path}>{item}</Link>
                  </MenubarItem>
                );
              })}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
}

export default HomeHeader;
