import { effect } from "./effect";

export type Item = {
  _id: string;
  name: string;
  description: String;
  effect: effect;
  type: string;
  icon: string;
};
