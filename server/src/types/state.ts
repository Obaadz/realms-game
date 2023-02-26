import { Document } from "mongoose";

export type State = {
  health: number;
  defense: number;
  attack: number;
  magic: number;
};
export interface IStateDocument extends Document, State {}
