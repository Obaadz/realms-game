import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { FieldError, UseFormClearErrors, UseFormRegister } from "react-hook-form";
import { User } from "../../../types/user";
import ErrorSpan from "../../ErrorSpan";

type Props = {
  register: UseFormRegister<Partial<User>>;
  emailError?: FieldError;
  clearErrors: UseFormClearErrors<Partial<User>>;
};

const REGEX_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Email: NextComponentType<AppContext, AppProps, Props> = ({
  register,
  emailError,
  clearErrors,
}) => {
  return (
    <>
      <input
        autoComplete="off"
        type="text"
        placeholder="البريد الالكتروني"
        className="rounded-md bg-[#D4B4A3] py-1 px-2 text-[#171718] placeholder:text-[#171718aa] focus:outline-none"
        {...register("email", {
          required: "الايميل مطلوب",
          pattern: {
            value: REGEX_PATTERN,
            message: "بالرجاء ادخال ايميل صحيح",
          },
        })}
        onChange={() => clearErrors("serverError" as any)}
      />

      {<ErrorSpan error={emailError} />}
    </>
  );
};

export default Email;
