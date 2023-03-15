import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const MainLayout: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-in-game bg-cover bg-center bg-no-repeat py-5 px-8 lg:px-16"
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default MainLayout;
