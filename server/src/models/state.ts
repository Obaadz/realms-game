import mongoose, { Schema } from "mongoose";
import { IStateDocument } from "../types/state";

const stateSchema = new Schema({
  health: { type: Number, required: true },
  physical_defense: { type: Number, required: true },
  physical_attack: { type: Number, required: true },
  magic_attack: { type: Number, required: true },
  magic_defense: { type: Number, required: true },
  ride_speed: { type: Number, required: true },
});

const State =
  mongoose.models.Status || mongoose.model<IStateDocument>("status", stateSchema);

export default State;
