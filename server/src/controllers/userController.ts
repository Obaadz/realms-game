import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGES } from "../types/enums";
import { findUser, isUserHasCharacter, insertUser } from "../services/user";
import { IUserDocument, User, UserFromToken } from "../types/user";
import { JwtAuthExpressRequest } from "../middleware/jwtAuth";

const TOKEN_EXPIRE_IN_MS = Number(process.env.TOKEN_EXPIRE_IN_MS) || 2_629_746_000; // 1 month;

function generateToken(user: IUserDocument): string {
  const SECRET = process.env.SECRET;
  if (!SECRET) throw new Error(ERROR_MESSAGES.NO_SECRET_KEY_DEFINED);
  return jwt.sign(user.toObject(), SECRET);
}

async function createUser(user: User): Promise<IUserDocument> {
  const dbUser = await insertUser(user).catch((err: any) => {
    if (err?.code === 11000) {
      throw new Error(ERROR_MESSAGES.DUPLICATE);
    }
    throw new Error(ERROR_MESSAGES.INCORRECT_REGISTER_DATA);
  });
  return dbUser;
}

export default class UserController {
  static async login(request: Request, response: Response) {
    try {
      const user: Pick<User, "email" | "password"> = request.body.user;

      if (!(user?.email && user?.password)) {
        throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);
      }

      const dbUser = await findUser({
        email: user.email,
        password: user.password,
      });

      if (!dbUser) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);

      const token = generateToken(dbUser);

      response
        .cookie("token", token, { maxAge: TOKEN_EXPIRE_IN_MS })
        .status(201)
        .send("Authenticated");
    } catch (err: any) {
      console.error(err);
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async register(request: Request, response: Response) {
    try {
      const user: User = request.body.user;

      if (!(user && user.email && user.password && user.age)) {
        throw new Error(ERROR_MESSAGES.INCORRECT_REGISTER_DATA);
      }

      const dbUser = await createUser(user);

      const token = generateToken(dbUser);

      response
        .cookie("token", token, { maxAge: TOKEN_EXPIRE_IN_MS })
        .status(201)
        .send("Authenticated");
    } catch (err: any) {
      console.error(err);
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async get(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const userId = request.params.id || request.auth?._id,
        authUser = request.auth;

      if (userId !== authUser?._id) {
        throw new Error(ERROR_MESSAGES.INCORRECT_TOKEN);
      }

      const dbUser = await findUser({ _id: userId }, "-password -__v");

      if (!dbUser) {
        throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      }

      response.status(200).send(dbUser);
    } catch (err: any) {
      console.error(err);
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
