import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { FieldError, UseFormClearErrors, UseFormRegister } from "react-hook-form";
import { User } from "../../../types/user";
import ErrorSpan from "../../ErrorSpan";
import Image from "next/image";

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
    <div className="relative py-1 px-2 2xl:px-4 2xl:py-2">
      <input
        autoComplete="off"
        // dir="ltr"
        type="text"
        placeholder="البريد الالكتروني"
        className="bg-transparent py-1 px-2 text-[#262631] placeholder:text-right placeholder:text-[#262631] focus:outline-none"
        {...register("email", {
          required: "الايميل مطلوب",
          pattern: {
            value: REGEX_PATTERN,
            message: "بالرجاء ادخال ايميل صحيح",
          },
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
      {<ErrorSpan error={emailError} />}
    </div>
  );
};

export default Email;
