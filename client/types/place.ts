import { Item } from "./item";
import { Inventory } from "./inventory";
import { Reward } from "./reward";
import { effect } from "./effect";

export type Place = {
  _id: string;
  name: string;
  type: "townHall" | "market" | "bank" | "guild" | "arena" | "dungeon";
  description: string;
  image: string;
  location?: { x: number; y: number };
  level?: number;
  requirements?: {
    forLevel: number;
    neededItems: string[] | Item[];
    newEffect: effect;
  }[];
  inventory?: string | Inventory;
  rewards?: Reward[];
  effect?: effect;
};
