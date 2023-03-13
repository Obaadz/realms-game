import { Document, Types } from "mongoose";
import { Item } from "./item";
import { Inventory } from "./inventory";
import { Reward } from "./reward";
import { effect } from "./effect";

export type Place = {
  name: string;
  type: "townHall" | "market" | "bank" | "guild" | "arena" | "dungeon";
  description: string;
  image: string;
  location?: { x: number; y: number };
  level?: number;
  requirements?: {
    forLevel: number;
    neededItems: Types.ObjectId[] | Item[];
    newEffect: effect;
  }[];
  inventory?: Types.ObjectId | Inventory;
  rewards?: Reward[];
  effect?: effect;
};

export interface IPlaceDocument extends Document, Place {}
