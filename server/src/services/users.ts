import { ERROR_MESSAGES } from "../types/enums";
import type { IUserDocument, User } from "../types/user";
import UserModel from "../models/user";

export async function getUser(user: Pick<User, "email" | "password">) {
  const dbUser: IUserDocument | null = await UserModel.findOne({
    email: user.email,
  });

  if (!dbUser || dbUser.password !== user.password)
    throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);

  await dbUser.populate("-password -age");

  return dbUser;
}

export function insertUser(user: User) {}
export function updateUser(user: Partial<User>) {}
