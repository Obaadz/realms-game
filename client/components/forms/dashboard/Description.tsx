import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { FieldError, UseFormClearErrors, UseFormRegister } from "react-hook-form";
import { Race } from "../../../types/race";
import ErrorSpan from "../../ErrorSpan";

type Props = {
  register: UseFormRegister<Omit<Race, "_id">>;
  descriptionError?: FieldError;
  clearErrors: UseFormClearErrors<Omit<Race, "_id">>;
};

const Description: NextComponentType<AppContext, AppProps, Props> = ({
  register,
  descriptionError,
  clearErrors,
}) => {
  return (
    <>
      <textarea
        autoComplete="off"
        placeholder="وصف العرق"
        className="resize-none overflow-hidden rounded-md bg-[#D4B4A3] py-1 px-2 text-[#171718] placeholder:text-[#171718aa] focus:outline-none"
        {...register("description", {
          required: "وصف العرق مطلوب",
        })}
        onChange={() => clearErrors("serverError" as any)}
      />

      {<ErrorSpan error={descriptionError} />}
    </>
  );
};

export default Description;
