import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";

type Props = {
  children: string;
  className?: string;
};

const H2: NextComponentType<AppContext, AppProps, Props> = ({ children, className }) => {
  return (
    <h2
      className={`select-none text-xl text-[#B5B1B8] drop-shadow-border sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl ${
        className ? className : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default H2;
