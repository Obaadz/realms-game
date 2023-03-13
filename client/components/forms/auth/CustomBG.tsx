import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import Image from "next/image";
import H2 from "../../H2";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const CustomH2: NextComponentType<AppContext, AppProps, Props> = ({
  children,
  className,
}) => {
  return (
    <div className="relative py-8 px-12">
      <Image
        priority={true}
        src="/images/auth_main_button.png"
        alt="a bg"
        width={1920}
        height={1080}
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-full p-2"
      />
      {children}
    </div>
  );
};

export default CustomH2;
