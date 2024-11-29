import { cn } from "@/lib/utils";
import { forwardRef, useRef, useState } from "react";
import HidePasswordIcon from "./HidePasswordIcon";
import { Input, InputProps } from "./Input";
import ShowPasswordIcon from "./ShowPasswordIcon";

type PasswordInputProps = InputProps & {};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [type, setType] = useState("password");
    const refInput = useRef<HTMLInputElement>(null);
    if (ref) {
      (ref as React.MutableRefObject<HTMLInputElement | null>).current =
        refInput.current;
    }

    const handleToggle = () => {
      if (type === "password") {
        setType("text");
      } else {
        setType("password");
      }
      refInput?.current?.focus();
    };

    const iconClassName = cn("absolute mr-10 fill-[#6e90bb]", "");

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
        <span
          className="flex justify-around items-center"
          onClick={handleToggle}
        >
          {type === "password" ? (
            <HidePasswordIcon className={iconClassName} />
          ) : (
            <ShowPasswordIcon className={iconClassName} />
          )}
        </span>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
