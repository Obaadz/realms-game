import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { FieldError, UseFormClearErrors, UseFormRegister } from "react-hook-form";
import { Race } from "../../../types/race";
import ErrorSpan from "../../ErrorSpan";

type Props = {
  register: UseFormRegister<Omit<Race, "_id">>;
  nameError?: FieldError;
  clearErrors: UseFormClearErrors<Omit<Race, "_id">>;
};

const Name: NextComponentType<AppContext, AppProps, Props> = ({
  register,
  nameError,
  clearErrors,
}) => {
  return (
    <>
      <input
        autoComplete="off"
        type="text"
        placeholder="اسم العرق"
        className="rounded-md bg-[#D4B4A3] py-1 px-2 text-[#171718] placeholder:text-[#171718aa] focus:outline-none"
        {...register("name", {
          required: "اسم العرق مطلوب",
        })}
        onChange={() => clearErrors("serverError" as any)}
      />

      {<ErrorSpan error={nameError} />}
    </>
  );
};

export default Name;
