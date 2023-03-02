import { Document, Types } from "mongoose";
import { Item } from "./item";
import { Inventory } from "./inventory";
import { Reward } from "./reward";

export type Place = {
  name: string;
  type: string;
  description: string;
  image: string;
  location?: { x: number; y: number };
  level?: number;
  requirements?: { level?: number; items: Types.ObjectId[] | Item[] };
  inventory?: Types.ObjectId | Inventory;
  rewards?: Reward[];
};

export interface IPlaceDocument extends Document, Place {}
