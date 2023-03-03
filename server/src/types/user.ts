import { JwtPayload } from "jsonwebtoken";
import { Document, Types } from "mongoose";
import { Character } from "./character";

export type User = {
  email: string;
  password: string;
  age: number;
  characters?: (Character | Types.ObjectId)[];
  current_character: Character | Types.ObjectId;
  crystal: number;
};

export type UserFromToken = JwtPayload & Pick<Partial<User>, "email">;

export interface IUserDocument extends Document, User {}
