import { Document } from "mongoose";
import { effect } from "./effect";

export type Item = {
  name: string;
  description: String;
  effect: effect;
  type: string;
  icon: string;
};

export interface IItemDocument extends Document, Item {}
