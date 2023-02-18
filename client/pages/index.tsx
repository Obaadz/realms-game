import axios, { AxiosResponse } from "axios";
import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import { ERROR_MESSAGES } from "../types/enums";
import { User } from "../types/user";
import getCookiesObjectFromString from "../utils/getCookiesObjectFromString";

const BACKEND_URL = process.env.BACKEND_URL as string;

type Props = {};

const Home: NextPage<Props> = () => {
  return <MainLayout>TEST</MainLayout>;
};

Home.getInitialProps = async (ctx) => {
  try {
    const cookiesString = ctx.req?.headers?.cookie;

    if (!cookiesString) throw new Error(ERROR_MESSAGES.SERVER_ERROR);

    const cookies = getCookiesObjectFromString(cookiesString);

    if (!cookies.token) throw new Error(ERROR_MESSAGES.NOT_LOGGED_IN);

    const { data }: AxiosResponse<Partial<User>> = await axios.post(
      `${BACKEND_URL}/v1/users`,
      {
        token: cookies.token,
      }
    );

    return { isLoggedIn: true };
  } catch (err: any) {
    ctx?.res?.writeHead(302, { Location: "/auth/login" }).end();

    return { isLoggedIn: false };
  }
};

export default Home;
