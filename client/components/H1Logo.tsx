import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";

type Props = {};

const H1Logo: NextComponentType<AppContext, AppProps, Props> = () => {
  return (
    <h1 className="mr-6 select-none font-lalezar text-4xl text-white drop-shadow-border md:text-6xl lg:-mr-32 2xl:text-7xl">
      عوالم منهارة
    </h1>
  );
};

export default H1Logo;
