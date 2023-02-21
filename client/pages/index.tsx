import axios, { AxiosResponse } from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import Button from "../components/Button";
import H1Logo from "../components/H1Logo";
import MainContainer from "../components/MainContainer";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <MainLayout>
      <H1Logo />
      <MainContainer>
        <div className="flex h-full items-center justify-center font-lalezar text-2xl">
          <Button>
            <Link href="/game">العب الآن</Link>
          </Button>
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Home;
