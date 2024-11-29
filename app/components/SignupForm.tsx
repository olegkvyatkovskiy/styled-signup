"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { Input } from "./Input";
import { PasswordInput } from "./PasswordInput";
import { PasswordValidity } from "./PasswordValidity";
import { getFormFieldsValues, TValidateResult, validate } from "./validators";

const SignupForm = () => {
  const [checkResult, setCheckResult] = useState<TValidateResult>();

  const [showAsError, setShowAsError] = useState(false);

  const handleEmailOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const form = e.target.form as HTMLFormElement;
    setCheckResult(validate(getFormFieldsValues(form)));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowAsError(false);

    const form = event.target.form as HTMLFormElement;
    setCheckResult(validate(getFormFieldsValues(form)));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setShowAsError(true);

    const fieldsValues = getFormFieldsValues(e.target as HTMLFormElement);

    const checkResult = validate(fieldsValues);
    setCheckResult(checkResult);
    if (!checkResult?.isValid) {
      return;
    }

    const body = JSON.stringify(fieldsValues);
    console.log("Form submitted", body);
    alert("Form submitted\n" + body);

    // fetch("/api/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   });
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  };

  return (
    <div className="w-[375px] relative bg-gradient-to-b from-[#f4f9ff] to-[#e0ecfb] p-[30px] flex-col justify-start items-center gap-[40px] flex mx-auto">
      <Image
        src="/star.svg"
        alt="Star"
        width={21}
        height={21}
        className="absolute left-[80px] top-[60px]"
      />
      <Image
        src="/star.svg"
        alt="Star"
        width={14}
        height={14}
        className="absolute left-[110px] top-[30px]"
      />
      <div className="text-center text-[#4a4d71] text-[28px] font-bold leading-7">
        Sign up
      </div>

      <form
        className="flex flex-col gap-[20px] items-center"
        onSubmit={handleSubmit}
      >
        <Input
          id="email"
          name="email"
          onBlur={handleEmailOnBlur}
          onChange={() => setShowAsError(false)}
          isValid={checkResult?.email.isValid}
          showAsError={showAsError}
        />

        {!checkResult?.email.isValid && (
          <div
            className={cn(
              "flex flex-col text-[13px] font-normal leading-[18px] w-full",
              showAsError ? "text-[#ff7f7f]" : "text-[#4a4d71]"
            )}
          >
            <span>It has to be an email</span>
          </div>
        )}

        <PasswordInput
          onChange={handlePasswordChange}
          id="password"
          name="password"
          isValid={checkResult?.password.isValid}
          showAsError={showAsError}
        />
        <PasswordValidity
          checkResult={checkResult?.password}
          showAsError={showAsError}
          className="w-full"
        />

        <button
          type="submit"
          className="w-60 h-12 px-8 py-[15px] bg-gradient-to-r from-[#6fc2ff] to-[#4b65ff] rounded-[30px] text-center text-white text-base font-bold leading-[14px]"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
