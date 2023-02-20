import { NextComponentType } from "next";
import { FieldError } from "react-hook-form";
import { AppContext, AppProps } from "next/app";

type Props = {
  error?: FieldError;
};

const ErrorSpan: NextComponentType<AppContext, AppProps, Props> = ({ error }) => {
  return (
    <span className="mx-auto -mt-4 h-2 max-w-fit select-none text-[#b01d1d]">
      <small>{error && error.message}</small>
    </span>
  );
};

export default ErrorSpan;
