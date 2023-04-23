import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
  ariaLabel?: string;
  isActive?: boolean;
};

const TopMenuItem: NextComponentType<AppContext, AppProps, Props> = ({
  label,
  href,
  ariaLabel,
  isActive = false,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`text-md relative flex items-center justify-center px-1 py-1 duration-150 ease-in hover:text-[#BE6E36] sm:text-xl md:px-2 md:text-2xl lg:px-4 lg:text-3xl xl:px-8 2xl:py-2 2xl:text-5xl ${
          isActive ? "text-[#BE6E36]" : ""
        }`}
        aria-label={ariaLabel ?? label}
      >
        <span className="relative z-10">{label}</span>
        <Image
          src="/images/top_menu_button.png"
          alt="background image"
          width={308}
          height={104}
          className="pointer-events-none absolute right-0 top-0 h-full w-full"
        />
      </Link>
    </li>
  );
};

export default TopMenuItem;
