import { HTMLAttributes } from "react";
import { TValidatePasswordResult } from "./validators";
import { cn } from "@/lib/utils";

const style = (isValid?: boolean, showAsError?: boolean) =>
  isValid ? "text-[#27b274]" : showAsError ? "text-[#ff7f7f]" : "";

export const PasswordValidity = ({
  checkResult,
  showAsError,
  className
}: {
  checkResult?: TValidatePasswordResult;
  showAsError?: boolean;
} & HTMLAttributes<HTMLDivElement>) => {
  const {
    hasCorrectLength,
    hasLowerCase,
    hasNumber,
    hasUpperCase,
    hasNoSpaces,
  } = checkResult || {};

  return (
    <div className={cn("flex flex-col text-[#4a4d71] text-[13px] font-normal leading-[18px]", className)}>
      <span className={style(hasCorrectLength && hasNoSpaces, showAsError)}>
        8 characters or more (no spaces)
      </span>
      <span className={style(hasLowerCase && hasUpperCase, showAsError)}>
        Uppercase and lowercase letters
      </span>
      <span className={style(hasNumber, showAsError)}>At least one digit</span>
    </div>
  );
};
