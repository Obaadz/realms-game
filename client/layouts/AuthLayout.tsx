import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import Image from "next/image";
import type { ReactNode } from "react";
import H1Logo from "../components/H1Logo";
import MainContainer from "../components/MainContainer";
import MainMovingLayout from "./MainMovingLayout";

type Props = {
  children?: ReactNode;
};

const AuthLayout: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <MainMovingLayout>
      <H1Logo />
      <MainContainer className="relative justify-center pt-12 pb-16 2xl:pb-20">
        <Image
          width={1920}
          height={1080}
          src="/images/auth_bg_final.png"
          priority={true}
          alt="a bg"
          className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-full p-2"
        />
        <div className="absolute right-16 top-0 -z-10 hidden select-none pt-14 text-[#C4B9C5] xl:flex 2xl:right-32">
          <picture>
            <source
              media="(min-width: 1700px)"
              width={140}
              srcSet="/images/auth_banner.png"
            />
            <Image
              width={113}
              height={283}
              src="/images/auth_banner.png"
              alt="اصدار اللعبه"
              className="pointer-events-none"
            />
          </picture>
          <h3 className="absolute top-1/2 w-full text-center text-xl">اصدار اللعبه</h3>
          <h3 className="absolute top-1/2 mt-8 w-full text-center text-xl">0.1</h3>
        </div>
        {children}
      </MainContainer>
    </MainMovingLayout>
  );
};

export default AuthLayout;
