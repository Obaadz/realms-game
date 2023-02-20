import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { UseFormRegister, FieldError, UseFormClearErrors } from "react-hook-form";
import { User } from "../../../types/user";
import ErrorSpan from "../../ErrorSpan";

type Props = {
  register: UseFormRegister<Partial<User>>;
  passwordError?: FieldError;
  clearErrors: UseFormClearErrors<Partial<User>>;
  autoComplete: "current-password" | "new-password";
};

const Password: NextComponentType<AppContext, AppProps, Props> = ({
  register,
  passwordError,
  clearErrors,
  autoComplete,
}) => {
  return (
    <>
      <input
        type="password"
        autoComplete="current-password"
        placeholder="كلمة المرور"
        className="rounded-md bg-[#D4B4A3] py-1 px-2 text-[#171718] placeholder:text-[#171718aa] focus:outline-none"
        {...register("password", {
          required: "كلمة المرور مطلوبه",
          minLength: { value: 6, message: "يجب ان تكون كلمة المرور اكثر من 6 احرف" },
        })}
        onChange={() => clearErrors("serverError" as any)}
      />

      {<ErrorSpan error={passwordError} />}
    </>
  );
};

export default Password;
