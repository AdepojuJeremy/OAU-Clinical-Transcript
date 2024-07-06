"use client";
import HomeHeader from "./HomeHeader";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";

export default function Student({ children }) {
  const { selectedStudentData: data } = useSelector((st) => st.app);

  return (
    <>
      <HomeHeader />
      <main className="gradient-bg min-h-screen pt-[10rem] w-full flex items-center justify-center flex-col flex-1 pb-8">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* <Avatar className="h-[150px] w-[150px]">
            <AvatarImage
              src={"https://github.com/shadcn.png"}
              alt={"@shadcn"}
            />
            <AvatarFallback>{"CN"}</AvatarFallback>
          </Avatar> */}
          {/* //TODO: CHANGE THIS */}
          <p className="text-[32px] font-bold text-primaryBlue">{data.name}</p>
          <p className="text-[32px] font-bold text-primaryGray">{data.matricNo}</p>
        </div>

        {children}
      </main>
    </>
  );
}
