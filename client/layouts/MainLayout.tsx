import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const MainLayout: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-game bg-cover bg-center bg-no-repeat text-3xl">
      {children}
    </div>
  );
};

export default MainLayout;
