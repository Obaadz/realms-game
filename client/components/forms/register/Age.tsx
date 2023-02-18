import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";

type Props = {};

const Age: NextComponentType<AppContext, AppProps, Props> = () => {
  return (
    <input
      type="text"
      placeholder="العمر"
      className="rounded-md bg-[#D4B4A3] py-1 px-2 text-[#171718] placeholder:text-[#171718aa] focus:outline-none"
    />
  );
};

export default Age;
