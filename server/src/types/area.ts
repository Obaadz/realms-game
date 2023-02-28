import { Document, Types } from "mongoose";
import { Item } from "./item";
import { Place } from "./place";

export type Area = {
  name: string;
  type: string;
  description: string;
  image: String;
  location?: { x: number; y: number };
  places?: Types.ObjectId[] | Place[];
  isOpen?: boolean;
  requirements?: { level?: number; items: Types.ObjectId[] | Item[] };
};

export interface IAreaDocument extends Document, Area {}
