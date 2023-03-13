import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import type { ReactNode } from "react";
import NextLink from "next/link";

type Props = {
  href: string;
  children?: ReactNode;
};

const Link: NextComponentType<AppContext, AppProps, Props> = ({ href, children }) => {
  return (
    <NextLink
      href={href}
      className="-mt-3 ml-2 text-left text-[#C4B9C5] duration-150 ease-in hover:text-[#BE6E36]"
    >
      <small>{children}</small>
    </NextLink>
  );
};

export default Link;
