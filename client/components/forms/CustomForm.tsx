import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { FormEvent, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
};

const CustomForm: NextComponentType<AppContext, AppProps, Props> = ({
  children,
  handleSubmit,
  className,
}) => {
  return (
    <form
      className={`text-md grid gap-4 xl:text-xl 2xl:text-3xl ${
        className ? className : ""
      }`}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default CustomForm;
