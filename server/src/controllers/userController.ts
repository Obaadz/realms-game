import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGES } from "../types/enums";
import { findUser, isUserHasCharacter, insertUser } from "../services/user";
import { User, UserFromToken } from "../types/user";

const TOKEN_EXPIRE_IN_MS = Number(process.env.TOKEN_EXPIRE_IN_MS) || 2_629_746_000; // 1 month;

export default class UserController {
  static async login(request: Request, response: Response) {
    try {
      const SECRET = process.env.SECRET;

      if (!SECRET) {
        console.log(ERROR_MESSAGES.NO_SECRET_KEY_DEFINED);
        throw new Error(ERROR_MESSAGES.SERVER_ERROR);
      }

      const user: Pick<User, "email" | "password"> = request.body.user;

      if (!(user?.email && user?.password))
        throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);

      const dbUser = await findUser({
        email: user.email,
        password: user.password,
      });

      if (!dbUser) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);

      const token = jwt.sign(dbUser.toObject(), SECRET);

      response
        .cookie("token", token, { maxAge: TOKEN_EXPIRE_IN_MS })
        .status(201)
        .send("Authenticated");
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async register(request: Request, response: Response) {
    try {
      const SECRET = process.env.SECRET;

      if (!SECRET) {
        console.log(ERROR_MESSAGES.NO_SECRET_KEY_DEFINED);
        throw new Error(ERROR_MESSAGES.SERVER_ERROR);
      }

      const user: User = request.body.user;

      if (!(user && user.email && user.password && user.age))
        throw new Error(ERROR_MESSAGES.INCORRECT_REGISTER_DATA);

      const dbUser = await insertUser(user).catch((err: any) => {
        if (err?.code === 11000) throw new Error(ERROR_MESSAGES.DUPLICATE);

        throw new Error(ERROR_MESSAGES.INCORRECT_REGISTER_DATA);
      });

      const token = jwt.sign(dbUser.toObject(), SECRET);

      response
        .cookie("token", token, { maxAge: TOKEN_EXPIRE_IN_MS })
        .status(201)
        .send("Authenticated");
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async verify(request: Request, response: Response) {
    try {
      const SECRET = process.env.SECRET;

      if (!SECRET) {
        console.log(ERROR_MESSAGES.NO_SECRET_KEY_DEFINED);
        throw new Error(ERROR_MESSAGES.SERVER_ERROR);
      }

      const token: string | null = request.body.token,
        queryIsUserHasCharacter = Boolean(request.query.isUserHasCharacter)
          ? true
          : false;

      if (!token) throw new Error(ERROR_MESSAGES.NOT_LOGGED_IN);

      const user = jwt.verify(token, SECRET) as UserFromToken;

      if (!user.email) throw new Error(ERROR_MESSAGES.INCORRECT_TOKEN);

      if (queryIsUserHasCharacter)
        response
          .status(200)
          .send({ isUserHasCharacter: await isUserHasCharacter({ email: user.email }) });
      else response.status(200).send("Authenticated");
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
