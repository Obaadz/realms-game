import { Document, Types } from "mongoose";
import { State } from "./state";

export type Race = {
  name: string;
  description: string;
  base_state: State | Types.ObjectId;
};

export interface IRaceDocument extends Document, Race {}
