import { Document, Types } from "mongoose";
import { Equipment } from "./equipment";
import { Inventory } from "./inventory";
import { Race } from "./race";
import { State } from "./state";

export type Character = {
  race: Race | Types.ObjectId;
  name: string;
  description: string;
  image: string;
  experience: number;
  experience_percentage: number;
  level: number;
  state: State | Types.ObjectId;
  inventory: Inventory | Types.ObjectId;
  equipment: Equipment | Types.ObjectId;
};

export interface ICharacterDocument extends Document, Character {}

export type InitialCharacter = Pick<Character, "name" | "race" | "description" | "image">;
