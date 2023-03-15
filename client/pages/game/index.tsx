import axios, { AxiosResponse } from "axios";
import { NextPage, NextPageContext } from "next";
import GameMenu from "../../components/game/game_menu";
import TopMenu from "../../components/game/top_menu";
import MainLayout from "../../layouts/game/MainLayout";
import { ERROR_MESSAGES } from "../../types/enums";
import { User } from "../../types/user";
import getCookiesObjectFromString from "../../utils/getCookiesObjectFromString";
import { BACKEND_URL } from "../_app";

type Props = {
  isLoggedIn: boolean;
  isUserHasCharacter: boolean;
};

const Game: NextPage<Props> = ({ isLoggedIn, isUserHasCharacter }) => {
  return (
    <MainLayout>
      <TopMenu />
      <GameMenu />
    </MainLayout>
  );
};

export default Game;

export async function getServerSideProps(ctx: NextPageContext) {
  try {
    const cookiesString = ctx.req?.headers?.cookie;

    if (!cookiesString) throw new Error(ERROR_MESSAGES.SERVER_ERROR);

    const cookies = getCookiesObjectFromString(cookiesString);

    if (!cookies.token) throw new Error(ERROR_MESSAGES.NOT_LOGGED_IN);

    const { data }: AxiosResponse<Partial<User>> = await axios.get(
      `${BACKEND_URL}/v1/users/me`,
      {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      }
    );

    return { props: { isLoggedIn: true } };
  } catch (err: any) {
    return {
      props: {},
      redirect: {
        destination: "/auth/login",
      },
    };
  }
}
