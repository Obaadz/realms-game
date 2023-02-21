import { JwtPayload } from "jsonwebtoken";
import { Document } from "mongoose";
import { Character } from "./character";

export type User = {
  email: string;
  password: string;
  age: number;
  characters?: Character[];
  crystal: Number;
};

export type UserFromToken = JwtPayload & Pick<Partial<User>, "email">;

export interface IUserDocument extends Document, User {}
