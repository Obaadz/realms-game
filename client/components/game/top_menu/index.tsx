import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import SectionContainer from "../SectionContainer";
import TopMenuItem from "./TopMenuItem";
import { useRouter } from "next/router";

type Props = {};

const topMenuItems = [
  { label: "الرئيسيه", href: "/game" },
  { label: "السوق", href: "/game/market" },
  { label: "التصنيفات", href: "/game/ranks" },
  { label: "تسجيل الخروج", href: "/logout" },
];

const TopMenu: NextComponentType<AppContext, AppProps, Props> = () => {
  const router = useRouter();

  return (
    <SectionContainer className="mt-8 font-semibold text-[#C4B9C5] md:px-8 xl:px-16 2xl:px-32">
      <nav>
        <ul className="flex justify-center gap-1 xl:gap-2 2xl:gap-4">
          {topMenuItems.map(({ label, href }) => (
            <TopMenuItem
              key={label}
              label={label}
              href={href}
              isActive={router.asPath === href}
            />
          ))}
        </ul>
      </nav>
    </SectionContainer>
  );
};

export default TopMenu;
