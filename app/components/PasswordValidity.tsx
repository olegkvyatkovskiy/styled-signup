import { HTMLAttributes } from "react";
import { TValidatePasswordResult } from "./validators";
import { cn } from "@/lib/utils";

export const PasswordValidity = ({
  className,
}: {
  checkResult?: TValidatePasswordResult;
  showAsError?: boolean;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col text-[#4a4d71] text-[13px] font-normal leading-[18px]",
        className
      )}
    >
      <span>8 characters or more (no spaces)</span>
      <span>Uppercase and lowercase letters</span>
      <span>At least one digit</span>
    </div>
  );
};
