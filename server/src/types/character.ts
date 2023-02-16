import { Document } from "mongoose";
import { User } from "./user";
import { Race } from "./race";

export type Character = {
  user: User;
  race: Race;
  name: string;
  description: string;
};

export interface ICharacterDocument extends Document, Character {}
