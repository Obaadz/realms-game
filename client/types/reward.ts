import { Item } from "./item";

export type Reward = {
  items?: { quantity: number; item: string | Item }[];
  experience?: number;
};
