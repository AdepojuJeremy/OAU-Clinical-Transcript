import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// Basic cn utility
const cn = (...classes) => classes.filter(Boolean).join(' ');

// cva implementation
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primaryBlue text-md text-primary-foreground hover:text-oauOrange",
        pass: "cursor-default bg-primaryVariant text-md text-primary-foreground rounded-none uppercase w-[100px]",
        resit: "cursor-default bg-oauOrange text-md text-white   rounded-none uppercase w-[100px]",
        repeat: "cursor-default bg-red-500 text-md text-white rounded-none uppercase w-[100px]",
        withdraw: "cursor-default bg-red-500 text-md text-white rounded-none uppercase w-[100px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-sm",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        full: "h-14 rounded-xl w-full",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// Example Usage
const MyComponent = () => {
  const [variantName, setVariantName] = React.useState("default");

  return (
    <Button className="self-end" variant={variantName}>
      {variantName}
    </Button>
  );
};
