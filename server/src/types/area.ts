import { Document, Types } from "mongoose";
import { Item } from "./item";
import { Place } from "./place";

export type Area = {
  name: string;
  type: string;
  description: string;
  image: string;
  location?: { x: number; y: number };
  level?: number;
  places?: Types.ObjectId[] | Place[];
  requirements?: { level?: number; items: Types.ObjectId[] | Item[] };
};

export interface IAreaDocument extends Document, Area {}
