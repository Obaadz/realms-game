import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import SectionContainer from "../SectionContainer";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const GameMenu: NextComponentType<AppContext, AppProps, Props> = ({}) => {
  return <SectionContainer className="mt-8">GAME MENU</SectionContainer>;
};

export default GameMenu;
