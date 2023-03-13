import { Item } from "./item";
import { Place } from "./place";

export type Area = {
  _id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  location?: { x: number; y: number };
  level?: number;
  places?: string[] | Place[];
  requirements?: { level?: number; items: string[] | Item[] };
};
