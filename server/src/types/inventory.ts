import { Document } from "mongoose";
import { Character } from "./character";
import { Item } from "./item";

export type Inventory = {
  max: number;
  character: Character;
  items: { quantity: Number; item: Item }[];
};

export interface IInventoryDocument extends Document, Inventory {}
