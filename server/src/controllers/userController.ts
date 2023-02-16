import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGES } from "../types/enums";
import { getUser } from "../services/users";
import { User } from "../types/user";

export default class UserController {
  static async login(request: Request, response: Response) {
    const SECRET = process.env.SECRET;
    if (!SECRET) throw new Error("NO SECRET KEY DEFINED");

    const user: Pick<User, "email" | "password"> = request.body.post;

    try {
      if (!(user?.email && user?.password))
        throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD);

      const dbUser = await getUser(user);

      const token = jwt.sign(dbUser, SECRET);

      response.cookie("token", token).status(201).send("Authenticated");
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
