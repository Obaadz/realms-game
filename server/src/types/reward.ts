import { Types } from "mongoose";
import { Item } from "./item";

export type Reward = {
  items?: { quantity: number; item: Types.ObjectId | Item }[];
  experience?: number;
};
