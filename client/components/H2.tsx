import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";

type Props = {
  children: string;
};

const H2: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <h2 className="select-none text-4xl text-[#B5B1B8] sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">
      {children}
    </h2>
  );
};

export default H2;
