import { ERROR_MESSAGES } from "../types/enums";
import type { IUserDocument, User } from "../types/user";
import UserModel from "../models/user";

export async function getUser(user: Pick<User, "email" | "password">) {
  const dbUser: IUserDocument | null = await UserModel.findOne({
    email: user.email,
    password: user.password,
  }).select("email");

  if (!dbUser) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);

  return dbUser;
}

export async function insertUser(user: User) {
  const dbUser: IUserDocument = new UserModel({
    email: user.email,
    password: user.password,
    age: user.age,
  });

  await dbUser.save();

  return getUser(dbUser);
}

export async function isUserHasCharacter(user: Partial<User>) {
  const dbUser = (await UserModel.findOne(
    { email: user.email },
    { characters: 1 }
  )) as Pick<IUserDocument, "characters">;

  const charactersLength = dbUser.characters?.length;

  return charactersLength ? true : false;
}

export async function updateUser(user: Partial<User>) {}
