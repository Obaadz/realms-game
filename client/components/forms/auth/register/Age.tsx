import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { useEffect } from "react";
import { UseFormRegister, FieldError, UseFormClearErrors } from "react-hook-form";
import { User } from "../../../../types/user";
import handleInputOnlyNumber from "../../../../utils/handleInputOnlyNumber";
import ErrorSpan from "../../../ErrorSpan";
import Image from "next/image";

type Props = {
  register: UseFormRegister<Partial<User>>;
  ageError?: FieldError;
  clearErrors: UseFormClearErrors<Partial<User>>;
};

const Age: NextComponentType<AppContext, AppProps, Props> = ({
  register,
  ageError,
  clearErrors,
}) => {
  useEffect(() => {
    const input: HTMLInputElement | null = document.querySelector("input[type=number]");

    input?.addEventListener("input", handleInputOnlyNumber);

    return function cleanUp() {
      input?.removeEventListener("input", handleInputOnlyNumber);
    };
  }, []);

  return (
    <div className="relative py-1 px-2 2xl:px-4 2xl:py-2">
      <input
        type="number"
        // dir="ltr"
        inputMode="numeric"
        pattern="[0-9]+"
        placeholder="العمر"
        className="bg-transparent py-1 px-2 text-[#262631] placeholder:text-right placeholder:text-[#262631] focus:outline-none"
        {...register("age", {
          required: "العمر مطلوب",
          valueAsNumber: true,
          min: {
            value: 18,
            message: "غير مسموح بالاشخاص الاقل من 18",
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
      {<ErrorSpan error={ageError} />}
    </div>
  );
};

export default Age;
