import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import { ReactNode, useEffect, useRef } from "react";
import React from "react";

type Props = {
  children?: ReactNode;
};

let aaa: any;

const MainMovingLayout: NextComponentType<AppContext, AppProps, Props> = ({
  children,
}) => {
  const bgDivRef = useRef() as any;

  useEffect(() => {
    const bg: any = bgDivRef.current;
    let bgWidth = bg.offsetWidth;
    let position = 0;

    window.addEventListener("resize", setBgWidth);

    const animate = () => {
      position += 0.5;

      if (position >= bgWidth) position = 0;

      bg.style.backgroundPosition = `${position}px 0`;
      aaa = requestAnimationFrame(animate);
    };
    animate();

    return function cleanUp() {
      cancelAnimationFrame(aaa);
      window.removeEventListener("resize", setBgWidth);
    };

    function setBgWidth() {
      bgWidth = bg.offsetWidth;
    }
  }, []);

  return (
    <div
      ref={bgDivRef}
      className="min-h-screen w-screen bg-game bg-cover bg-center py-5 md:h-screen lg:px-64"
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default MainMovingLayout;
