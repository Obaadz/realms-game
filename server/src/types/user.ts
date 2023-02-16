import { Document } from "mongoose";

export type User = {
  email: string;
  password: string;
  age: number;
};

export interface IUserDocument extends Document, User {}
