import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
const MainContainer: NextComponentType<AppContext, AppProps, Props> = ({
  children,
  className,
}) => {
  return (
    <main
      className={`min-h-3/4 container relative z-10 mx-auto mt-2 flex w-full flex-col items-center gap-4 rounded-xl p-2 font-lalezar lg:mt-5 lg:gap-6 ${
        className ? className : ""
      }`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
