import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGES } from "../types/enums";
import { getUser, insertUser } from "../services/users";
import { User } from "../types/user";

export default class UserController {
  static async login(request: Request, response: Response) {
    const SECRET = process.env.SECRET;

    if (!SECRET) {
      console.log(ERROR_MESSAGES.NO_SECRET_KEY_DEFINED);
      throw new Error(ERROR_MESSAGES.SERVER_ERROR);
    }

    const user: Pick<User, "email" | "password"> = request.body;

    try {
      if (!(user?.email && user?.password))
        throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);

      const dbUser = await getUser(user);

      const token = jwt.sign(dbUser.toObject(), SECRET);

      response.cookie("token", token).status(201).send("Authenticated");
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async register(request: Request, response: Response) {
    const SECRET = process.env.SECRET;

    if (!SECRET) {
      console.log(ERROR_MESSAGES.NO_SECRET_KEY_DEFINED);
      throw new Error(ERROR_MESSAGES.SERVER_ERROR);
    }

    const user: User = request.body;

    try {
      if (!(user && user.email && user.password && user.age))
        throw new Error(ERROR_MESSAGES.INCORRECT_REGISTER_DATA);

      const dbUser = await insertUser(user).catch((err: any) => {
        if (err?.code === 11000) throw new Error(ERROR_MESSAGES.DUPLICATE);

        throw new Error(ERROR_MESSAGES.INCORRECT_REGISTER_DATA);
      });

      const token = jwt.sign(dbUser.toObject(), SECRET);

      response.cookie("token", token).status(201).send("Authenticated");
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
