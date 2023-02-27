import { Document, Types } from "mongoose";
import { Character } from "./character";
import { Item } from "./item";

export type Inventory = {
  character: Character | Types.ObjectId;
  items: { quantity: Number; item: Item | Types.ObjectId }[];
  max: number;
};

export interface IInventoryDocument extends Document, Inventory {}

export type InitialInventory = {
  character: Types.ObjectId;
  max?: number;
};
