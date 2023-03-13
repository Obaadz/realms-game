import type { NextPage } from "next";
import Link from "next/link";
import Button from "../../components/Button";
import H1Logo from "../../components/H1Logo";
import MainContainer from "../../components/MainContainer";
import MainLayout from "../..//layouts/MainLayout";
import H2 from "../../components/H2";
import { User } from "../../types/user";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectUser, updateUser } from "../../store/slices/user";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import dashboardSideProps from "../../utils/dashboardSideProps";

type Props = {
  dbUser: Partial<User>;
};

const btnLists: { [key: string]: any } = {
  races: (
    <>
      <Button className="w-64">
        <Link href="/dashboard/races/create">انشاء عرق</Link>
      </Button>
      <Button className="w-64">
        <Link href="/dashboard/races">عرض الاعراق</Link>
      </Button>
    </>
  ),
  items: (
    <>
      <Button className="w-64">
        <Link href="/dashboard/items/create">انشاء غرض</Link>
      </Button>
      <Button className="w-64">
        <Link href="/dashboard/items">عرض الاغراض</Link>
      </Button>
    </>
  ),
  buildings: (
    <>
      <Button className="w-64">
        <Link href="/dashboard/buildings/create">انشاء مبنى</Link>
      </Button>
      <Button className="w-64">
        <Link href="/dashboard/buildings">عرض المباني</Link>
      </Button>
    </>
  ),
};

const Home: NextPage<Props> = ({ dbUser }) => {
  const appDispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [currentOption, setCurrentOption] = useState<
    "races" | "items" | "buildings" | ""
  >("");

  useEffect(() => {
    appDispatch(updateUser(dbUser));
  }, [appDispatch]);

  return (
    <MainLayout>
      <H1Logo />
      <MainContainer>
        <div className="grid h-full items-center justify-center font-lalezar text-2xl">
          {user.loading ? (
            <Audio
              height="100"
              width="100"
              color="#B5B1B8"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          ) : (
            <>
              <H2 className="mb-5 text-center">
                {user ? `مرحباً ${user.email}` : "مرحباً بك في عوالم"}
              </H2>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setCurrentOption("races")}>الاعراق</Button>
                <Button onClick={() => setCurrentOption("items")}>الاغراض</Button>
                <Button onClick={() => setCurrentOption("buildings")}>المباني</Button>
              </div>
              <div className="mt-10 grid  gap-3">{btnLists[currentOption]}</div>
            </>
          )}
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps = dashboardSideProps;
