import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { BACKEND_URL } from "../pages/_app";
import { User } from "../types/user";
import getTokenFromCookies from "../utils/getTokenFromCookies";
import getUserFromToken from "../utils/getUserFromToken";

type IdTokenObject = {
  id?: string;
  token?: string;
};

export async function getUserById({ id, token }: IdTokenObject) {
  if (!id) id = getUserFromToken(token || getTokenFromCookies())._id;

  const { data }: AxiosResponse<Partial<User>> = await axios.get(
    `${BACKEND_URL}/v1/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token || getTokenFromCookies()}`,
      },
    }
  );

  return data;
}

export const getUserByIdThunk = createAsyncThunk("users/getUser", getUserById);
