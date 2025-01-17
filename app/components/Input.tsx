import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isValid?: boolean;
  showAsError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isValid, showAsError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        autoComplete="off"
        className={cn(
          "w-[315px] h-12 px-5 py-2.5 bg-white rounded-[10px] border-2 border-white justify-between items-center inline-flex focus:outline-none focus:border-[#6F91BC]",
          showAsError
            ? isValid
              ? "border-[#27b273] text-[#27b273] bg-white"
              : "border-[#ff7f7f] text-[#ff7f7f] bg-[#fdefee]"
            : "",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
