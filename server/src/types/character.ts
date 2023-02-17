import { Document } from "mongoose";
import { Race } from "./race";

export type Character = {
  race: Race;
  name: string;
  description: string;
};

export interface ICharacterDocument extends Document, Character {}
