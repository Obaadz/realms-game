import { effect } from "./effect";

export type Item = {
  name: string;
  description: String;
  effect: effect;
  type: String;
  icon: String;
};