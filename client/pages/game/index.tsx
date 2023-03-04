import axios, { AxiosResponse } from "axios";
import { NextPage, NextPageContext } from "next";
import { ERROR_MESSAGES } from "../../types/enums";
import { User } from "../../types/user";
import getCookiesObjectFromString from "../../utils/getCookiesObjectFromString";
import { BACKEND_URL } from "../_app";

type Props = {
  isLoggedIn: boolean;
  isUserHasCharacter: boolean;
};

const Game: NextPage<Props> = ({ isLoggedIn, isUserHasCharacter }) => {
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
        props: { isLoggedIn: true },
        redirect: {
          destination: "/",
        },
      };

    return { props: { isLoggedIn: true, isUserHasCharacter: true } };
  } catch (err: any) {
    return {
      props: {},
      redirect: {
        destination: "/auth/login",
      },
    };
  }
}
