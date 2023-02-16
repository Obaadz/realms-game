import mongoose, { Schema } from "mongoose";
import { IStateDocument } from "../types/state";

export const stateSchema = new Schema({
  health: { type: Number, required: true },
  defense: { type: Number, required: true },
  attack: { type: Number, required: true },
  magic: { type: Number, required: true },
});

const State =
  mongoose.models.status || mongoose.model<IStateDocument>("status", stateSchema);

export default State;
