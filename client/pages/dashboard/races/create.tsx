import type { NextPage } from "next";
import Link from "next/link";
import H1Logo from "../../../components/H1Logo";
import MainContainer from "../../../components/MainContainer";
import MainLayout from "../../../layouts/MainLayout";
import H2 from "../../../components/H2";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectUser, updateUser } from "../../../store/slices/user";
import { useEffect } from "react";
import { Audio } from "react-loader-spinner";
import RaceCreateForm from "../../../components/forms/dashboard/RaceCreateForm";
import dashboardSideProps from "../../../utils/dashboardSideProps";
import { User } from "../../../types/user";

type Props = {
  dbUser: Partial<User>;
};
const Create: NextPage<Props> = ({ dbUser }) => {
  const appDispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    appDispatch(updateUser(dbUser));
  }, [appDispatch]);

  return (
    <MainLayout>
      <H1Logo />
      <MainContainer>
        <div className="grid h-full items-center justify-center font-lalezar text-xs sm:text-base">
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
              <RaceCreateForm />
              <Link href="/dashboard" className="text-2xl text-[#B5B1B8]">
                العودة للرئيسية
              </Link>
            </>
          )}
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Create;

export const getServerSideProps = dashboardSideProps;
