import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button: NextComponentType<AppContext, AppProps, Props> = ({
  children,
  isDisabled,
  className,
  onClick,
}) => {
  return (
    <button
      type="submit"
      className={`2xl:text- xl mx-auto w-fit cursor-pointer rounded-md bg-[#D4B4A3] py-2 px-12 text-xl text-[#171718] duration-150 ease-in hover:bg-[#D4B4A3aa] sm:text-2xl  md:text-4xl ${
        className ? className : ""
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
