import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";

type Props = {
  children: string;
};

const Button: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <input
      type="submit"
      value={children}
      className="mx-auto w-fit cursor-pointer rounded-md bg-[#D4B4A3] py-2 px-12 text-[#171718] duration-150 ease-in hover:bg-[#D4B4A3aa]"
    />
  );
};

export default Button;
