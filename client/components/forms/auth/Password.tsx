import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { UseFormRegister, FieldError, UseFormClearErrors } from "react-hook-form";
import { User } from "../../../types/user";
import ErrorSpan from "../../ErrorSpan";
import Image from "next/image";

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
    <div className="relative py-1 px-2 2xl:px-4 2xl:py-2">
      <input
        type="password"
        // dir="ltr"
        autoComplete="current-password"
        placeholder="كلمة المرور"
        className="bg-transparent py-1 px-2 text-[#262631] placeholder:text-right placeholder:text-[#262631] focus:outline-none"
        {...register("password", {
          required: "كلمة المرور مطلوبه",
          minLength: { value: 6, message: "يجب ان تكون كلمة المرور اكثر من 6 احرف" },
        })}
        onChange={() => clearErrors("serverError" as any)}
      />
      <Image
        priority={true}
        src="/images/auth_email_button.png"
        alt="a bg"
        width={1920}
        height={1080}
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-full"
      />
      {<ErrorSpan error={passwordError} />}
    </div>
  );
};

export default Password;
