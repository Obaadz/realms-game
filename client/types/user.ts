import { Character } from "./character";

export type User = {
  email: string;
  password: string;
  age: number;
  characters?: Character[];
  crystal: Number;
};
