import { VariantProps, cva } from "class-variance-authority";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/Utils";

const buttonVariants = cva(
  "flex items-center justify-center  rounded-md font-medium text-white duration-300 dark:text-black disabled:bg-indigo-500 disabled:hover:bg-indigo-500 disabled:cursor-not-allowed", {
  variants: {
    variant: {
      // ** FILLED
      default: "bg-indigo-500 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700",
      danger: "bg-red-900 dark:bg-red-600 dark:text-white dark:hover:bg-red-700",
      cancel: "bg-gray-300 text-gray-700 dark:bg-[#f5f5fa]dark:text-dark hover:bg-gray-400 dark:hover:bg-gray-300",

      // ** OUTLINE
      outline:
        "border border-indigo-400 hover:text-white bg-transparent text-black hover:border-transparent hover:bg-indigo-600 dark:text-gray-700 dark:hover:text-white",
    },
    size: {
      default: "p-3",
      sm: "text-sm px-4 py-2",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isloading?:boolean;
  type?:"submit" | "reset" | "button" ;
}

const Button = ({  type ,variant, size, fullWidth, className, children,isloading, ...props }: ButtonProps) => {
  return (
    <button type={type} disabled={isloading} className={cn(buttonVariants({ variant, size, fullWidth, className }))} {...props}>
     {isloading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>:null}
      {children}
    </button>
  );
};

export default Button;
