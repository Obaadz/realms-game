import axios, { AxiosResponse } from "axios";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ERROR_MESSAGES } from "../../types/enums";
import { User } from "../../types/user";
import getCookiesObjectFromString from "../../utils/getCookiesObjectFromString";

const BACKEND_URL = process.env.BACKEND_URL as string;

type Props = {
  isLoggedIn: boolean;
  isUserHasCharacter: boolean;
};

const Game: NextPage<Props> = ({ isLoggedIn, isUserHasCharacter }) => {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) router.replace("/auth/login");
    else if (isUserHasCharacter === false) router.replace("/game/select-character");
  }, []);

  return <div>Game</div>;
};

export default Game;

export async function getServerSideProps(ctx: NextPageContext) {
  try {
    const cookiesString = ctx.req?.headers?.cookie;

    if (!cookiesString) throw new Error(ERROR_MESSAGES.SERVER_ERROR);

    const cookies = getCookiesObjectFromString(cookiesString);

    if (!cookies.token) throw new Error(ERROR_MESSAGES.NOT_LOGGED_IN);
    const { data }: AxiosResponse<Partial<User & { isUserHasCharacter: boolean }>> =
      await axios.post(
        `${BACKEND_URL}/v1/users`,
        {
          token: cookies.token,
        },
        { params: { isUserHasCharacter: 1 } }
      );

    if (!data.isUserHasCharacter)
      return {
        props: { isLoggedIn: true, isUserHasCharacter: !data.isUserHasCharacter },
        redirect: {
          destination: "/game/select-character",
        },
      };

    return { props: { isLoggedIn: true, isUserHasCharacter: true } };
  } catch (err: any) {
    return {
      props: { isLoggedIn: false },
      redirect: {
        destination: "/auth/login",
      },
    };
  }
}
