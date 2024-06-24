"use client";
import * as React from "react";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

const InputCont = ({ className, children, isPasswordComp, ...props }) => {
  const { passwordVisible } = useSelector((st) => st.app);
  return (
    <div  
      className={cn(
        "flex h-10 w-full rounded-md px-3 py-2 text-base ring-offset-backgroundColor focus-visible:ring-2 focus-visible:primaryGray focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundColor",
        className
      )}
    >
      <input
        className="w-full file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground bg-transparent focus-visible:outline-none focus:bg-none "
        type={isPasswordComp ? (passwordVisible ? "text" : "password") : "text"}
        {...props}
        // ref={ref}
      />
      {children}
    </div>
  );
};

export default InputCont;
