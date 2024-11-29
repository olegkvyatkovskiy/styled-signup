"use client";

import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { Input } from "./Input";
import { PasswordInput } from "./PasswordInput";
import { PasswordValidity } from "./PasswordValidity";
import { getFormFieldsValues, TValidateResult, validate } from "./validators";

const SignupForm = () => {
  const [checkResult, setCheckResult] = useState<TValidateResult>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const fieldsValues = getFormFieldsValues(e.target as HTMLFormElement);

    const checkResult = validate(fieldsValues);
    setCheckResult(checkResult);
    if (!checkResult?.isValid) {
      return;
    }

    const body = JSON.stringify(fieldsValues);
    console.log("Form submitted", body);
    alert("Form submitted\n" + body);
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
        <Input id="email" name="email" />

        <PasswordInput id="password" name="password" />
        <PasswordValidity
          checkResult={checkResult?.password}
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
