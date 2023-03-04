import { Character } from "./character";

export type User = {
  _id: string;
  email: string;
  password: string;
  age: number;
  characters?: (Character | string)[];
  current_character: Character | string;
  crystal: number;
};
