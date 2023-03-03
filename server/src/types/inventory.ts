import { Document, Types } from "mongoose";
import { Character } from "./character";
import { Item } from "./item";

export type Inventory = {
  items: { quantity: Number; item: Item | Types.ObjectId }[];
  character?: Character | Types.ObjectId;
  max?: number;
};

export interface IInventoryDocument extends Document, Inventory {}

export type InitialInventory = {
  character?: Types.ObjectId;
  max?: number;
};
