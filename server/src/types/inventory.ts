import { Document, Types } from "mongoose";
import { Character } from "./character";
import { Item } from "./item";

export type Inventory = {
  max: number;
  character: Character | Types.ObjectId;
  items: { quantity: Number; item: Item | Types.ObjectId }[];
};

export interface IInventoryDocument extends Document, Inventory {}
