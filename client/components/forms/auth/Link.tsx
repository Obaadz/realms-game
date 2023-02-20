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
      className="-mt-3 ml-2 text-left text-[#986C49] duration-150 ease-in hover:text-[#986C49aa]"
    >
      <small>{children}</small>
    </NextLink>
  );
};

export default Link;
