import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { FieldError, UseFormClearErrors, UseFormRegister } from "react-hook-form";
import { Race } from "../../../types/race";
import { State } from "../../../types/state";
import ErrorSpan from "../../ErrorSpan";

type Props = {
  register: UseFormRegister<Omit<Race, "_id">>;
  baseStateError?: FieldError;
  clearErrors: UseFormClearErrors<Omit<Race, "_id">>;
  baseState: keyof State;
  placeholder: string;
};

const BaseState: NextComponentType<AppContext, AppProps, Props> = ({
  register,
  baseStateError,
  clearErrors,
  baseState,
  placeholder,
}) => {
  return (
    <>
      <input
        type="number"
        inputMode="numeric"
        pattern="[0-9]+"
        placeholder={placeholder}
        className="rounded-md bg-[#D4B4A3] py-1 px-2 text-[#171718] placeholder:text-[#171718aa] focus:outline-none"
        {...register(`base_state.${baseState}`, {
          required: "مطلوبه",
          valueAsNumber: true,
        })}
        onChange={() => clearErrors("serverError" as any)}
      />
      {<ErrorSpan error={baseStateError} />}
    </>
  );
};

export default BaseState;
