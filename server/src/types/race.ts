import { Document } from "mongoose";
import { State } from "./state";

export type Race = {
  name: string;
  description: string;
  base_state: State;
};

export interface IRaceDocument extends Document, Race {}
