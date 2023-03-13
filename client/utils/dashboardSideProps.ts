import { NextPageContext } from "next";
import { getUserById } from "../services/user";
import { ERROR_MESSAGES } from "../types/enums";
import getCookiesObjectFromString from "./getCookiesObjectFromString";

export default async (ctx: NextPageContext) => {
  try {
    const cookiesString = ctx.req?.headers?.cookie;

    if (!cookiesString) throw new Error(ERROR_MESSAGES.SERVER_ERROR);

    const cookies = getCookiesObjectFromString(cookiesString);

    if (!cookies.token) throw new Error(ERROR_MESSAGES.NOT_LOGGED_IN);

    const dbUser = await getUserById({
      token: cookies.token,
    });

    if (!dbUser) throw new Error(ERROR_MESSAGES.INCORRECT_TOKEN);

    return { props: { isLoggedIn: true, isAdmin: true, dbUser } };
  } catch (err: any) {
    return {
      props: {},
      redirect: {
        destination: "/auth/login",
      },
    };
  }
};
