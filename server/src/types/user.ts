import { Document } from "mongoose";
import { Character } from "./character";

export type User = {
  email: string;
  password: string;
  age: number;
  characters: Character[];
};

export interface IUserDocument extends Document, User {}
