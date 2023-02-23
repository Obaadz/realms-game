import { Character } from "./character";

export type User = {
  email: string;
  password: string;
  age: number;
  characters?: Character[];
  current_character?: Character;
  crystal: Number;
};
