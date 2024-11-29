import { cn } from "@/lib/utils";
import { forwardRef, useRef, useState } from "react";
import { Input, InputProps } from "./Input";

type PasswordInputProps = InputProps & {};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [type] = useState("password");
    const refInput = useRef<HTMLInputElement>(null);
    if (ref) {
      (ref as React.MutableRefObject<HTMLInputElement | null>).current =
        refInput.current;
    }

    return (
      <div className="flex">
        <Input
          ref={refInput}
          type={type}
          name="password"
          placeholder="Create your password"
          className={cn("pr-8", className)}
          {...props}
        />
        <span className="flex justify-around items-center">
          {type === "password" ? <span>hide</span> : <span>show</span>}
        </span>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
