import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { FormEvent, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  handleSubmit: () => void;
};

const AuthForm: NextComponentType<AppContext, AppProps, Props> = ({
  children,
  handleSubmit,
}) => {
  return (
    <form className="text-md grid gap-4 lg:text-xl 2xl:text-3xl" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default AuthForm;
