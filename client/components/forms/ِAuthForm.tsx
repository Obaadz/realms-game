import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const AuthForm: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <form
      className="text-md grid gap-4 lg:text-xl 2xl:text-3xl"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </form>
  );
};

export default AuthForm;
