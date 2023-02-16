import { Document } from "mongoose";

export type State = {
  health: Number;
  defense: Number;
  attack: Number;
  magic: Number;
};

export interface IStateDocument extends Document, State {}
