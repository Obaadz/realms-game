import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { MouseEvent, ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const CustomButton: NextComponentType<AppContext, AppProps, Props> = ({
  children,
  isDisabled,
  className,
  onClick,
}) => {
  return (
    <button
      type="submit"
      className={`relative mx-auto w-fit cursor-pointer rounded-md bg-transparent py-2 px-12 text-xl text-[#171718] duration-150 ease-in sm:text-2xl md:text-4xl  2xl:text-5xl ${
        className ? className : ""
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      <Image
        priority={true}
        src="/images/auth_login_button.png"
        alt="a bg"
        width={1920}
        height={1080}
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-full hover:p-2"
      />
      {children}
    </button>
  );
};

export default CustomButton;
