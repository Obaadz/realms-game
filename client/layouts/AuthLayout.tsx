import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import Image from "next/image";
import type { ReactNode } from "react";
import H1Logo from "../components/H1Logo";
import MainContainer from "../components/MainContainer";
import MainLayout from "./MainLayout";

type Props = {
  children?: ReactNode;
};

const AuthLayout: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <MainLayout>
      <H1Logo />
      <MainContainer className="justify-center bg-gradient-to-r from-[#5a3d27] to-[#eb9e67] py-3">
        <Image
          width={1920}
          height={1080}
          src="/images/auth_bg.png"
          alt="a bg"
          className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-full p-2"
        />
        {children}
      </MainContainer>
    </MainLayout>
  );
};

export default AuthLayout;
