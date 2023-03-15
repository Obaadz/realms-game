import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};
const SectionContainer: NextComponentType<AppContext, AppProps, Props> = ({
  children,
  className,
}) => {
  return (
    <section className={`container mx-auto font-lalezar ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
