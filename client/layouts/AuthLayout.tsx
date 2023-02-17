import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import type { ReactNode } from "react";
import MainLayout from "./MainLayout";

type Props = {
  children?: ReactNode;
};

const AuthLayout: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default AuthLayout;
