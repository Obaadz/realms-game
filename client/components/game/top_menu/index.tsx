import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import SectionContainer from "../SectionContainer";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const TopMenu: NextComponentType<AppContext, AppProps, Props> = ({}) => {
  return (
    <SectionContainer className="mt-8 font-semibold text-[#C4B9C5] md:px-8 xl:px-16 2xl:px-32">
      <nav>
        <ul className="flex justify-center gap-1 xl:gap-2 2xl:gap-4">
          <li>
            <Link
              href="/game"
              className="text-md relative flex items-center justify-center px-1 py-1 text-[#BE6E36] sm:text-xl md:px-2 md:text-2xl lg:px-4 lg:text-3xl xl:px-8 2xl:py-2 2xl:text-5xl"
            >
              <span className="relative z-10">الرئيسيه</span>
              <Image
                priority={true}
                src="/images/top_menu_button.png"
                alt="a bg"
                width={308}
                height={104}
                className="pointer-events-none absolute right-0 top-0 h-full w-full"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="text-md relative flex items-center justify-center px-1 py-1 duration-150 ease-in hover:text-[#BE6E36] sm:text-xl md:px-2 md:text-2xl lg:px-4 lg:text-3xl xl:px-8 2xl:py-2 2xl:text-5xl"
            >
              <span className="relative z-10">السوق</span>
              <Image
                priority={true}
                src="/images/top_menu_button.png"
                alt="a bg"
                width={308}
                height={104}
                className="pointer-events-none absolute right-0 top-0 h-full w-full"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="text-md relative flex items-center justify-center px-1 py-1 duration-150 ease-in hover:text-[#BE6E36] sm:text-xl md:px-2 md:text-2xl lg:px-4 lg:text-3xl xl:px-8 2xl:py-2 2xl:text-5xl"
            >
              <span className="relative z-10">التصنيفات</span>
              <Image
                priority={true}
                src="/images/top_menu_button.png"
                alt="a bg"
                width={308}
                height={104}
                className="pointer-events-none absolute right-0 top-0 h-full w-full"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="text-md relative flex items-center justify-center px-1 py-1 duration-150 ease-in hover:text-[#BE6E36] sm:text-xl md:px-2 md:text-2xl lg:px-4 lg:text-3xl xl:px-8 2xl:py-2 2xl:text-5xl"
            >
              <span className="relative z-10">تسجيل الخروج</span>
              <Image
                priority={true}
                src="/images/top_menu_button.png"
                alt="a bg"
                width={308}
                height={104}
                className="pointer-events-none absolute right-0 top-0 h-full w-full"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </SectionContainer>
  );
};

export default TopMenu;
