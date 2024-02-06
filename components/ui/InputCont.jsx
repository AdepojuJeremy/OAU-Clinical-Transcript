import * as React from "react";

import { cn } from "@/lib/utils";

const InputCont = ({className, children, passwordVisible}, ...props) => {
  return (
    <div className={cn("flex h-10 w-full rounded-md px-3 py-2 text-base ring-offset-backgroundColor focus-visible:ring-2 focus-visible:primaryGray focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundColor", className)} {...props}>
      <input
        // type={type}
        className={cn(
          "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground bg-transparent focus-visible:outline-none",
          className
        )}
        type={passwordVisible ? 'text' : 'password'}
        // ref={ref}
      />
      {children}
    </div>
  );
};

export default InputCont;
