import { State } from "./state";

export type Race = {
  _id: string;
  name: string;
  description: string;
  base_state: State | string;
};
