import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";

type Props = {
  children: string;
  className?: string;
};

const H2: NextComponentType<AppContext, AppProps, Props> = ({ children, className }) => {
  return (
    <h2
      className={`select-none text-2xl text-[#B5B1B8] md:text-3xl 2xl:text-6xl ${
        className ? className : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default H2;
