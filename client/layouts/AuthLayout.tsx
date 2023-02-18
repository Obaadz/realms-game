import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import Image from "next/image";
import type { ReactNode } from "react";
import MainLayout from "./MainLayout";

type Props = {
  children?: ReactNode;
};

const AuthLayout: NextComponentType<AppContext, AppProps, Props> = ({ children }) => {
  return (
    <MainLayout>
      <h1 className="mr-6 select-none font-lalezar text-4xl text-white md:text-6xl lg:-mr-32 2xl:text-7xl">
        عوالم منهارة
      </h1>
      <main className="container relative z-10 mx-auto mt-10 flex h-3/4 w-full flex-col items-center justify-center gap-12 rounded-xl bg-gradient-to-r from-[#5a3d27] to-[#eb9e67] p-2 font-lalezar">
        <Image
          width={1920}
          height={1080}
          src="/images/auth_bg.png"
          alt="a bg"
          className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-full p-2"
        />
        {children}
      </main>
    </MainLayout>
  );
};

export default AuthLayout;
