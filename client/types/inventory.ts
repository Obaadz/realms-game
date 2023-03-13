import { Character } from "./character";
import { Item } from "./item";

export type Inventory = {
  _id: string;
  items: { quantity: Number; item: Item | string }[];
  character?: Character | string;
  max?: number;
};
