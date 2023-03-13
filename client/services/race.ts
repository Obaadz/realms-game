import axios, { AxiosResponse } from "axios";
import { BACKEND_URL } from "../pages/_app";
import { Race } from "../types/race";
import { User } from "../types/user";
import getTokenFromCookies from "../utils/getTokenFromCookies";
import { ERROR_MESSAGES } from "../types/enums";

export async function createRace(race: Omit<Race, "_id">) {
  const token = getTokenFromCookies();

  if (!token) throw new Error(ERROR_MESSAGES.INCORRECT_TOKEN);

  const { data }: AxiosResponse = await axios.post(
    `${BACKEND_URL}/v1/races`,
    {
      race,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
}
