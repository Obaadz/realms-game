import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { UseFormRegister, FieldError, UseFormClearErrors } from "react-hook-form";
import { User } from "../../../types/user";
import ErrorSpan from "../../ErrorSpan";

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
  return (
    <>
      <input
        type="number"
        placeholder="العمر"
        className=" appearance-none rounded-md bg-[#D4B4A3] py-1 px-2 text-[#171718] placeholder:text-[#171718aa] focus:outline-none"
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

      {<ErrorSpan error={ageError} />}
    </>
  );
};

export default Age;
