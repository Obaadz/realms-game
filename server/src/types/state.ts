import { Document } from "mongoose";

export type State = {
  health: number;
  physical_defense: number;
  physical_attack: number;
  magic_attack: number;
  magic_defense: number;
  ride_speed: number;
};
export interface IStateDocument extends Document, State {}
