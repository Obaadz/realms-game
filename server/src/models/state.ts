import mongoose, { Schema } from "mongoose";
import { IStateDocument } from "../types/state";

const stateSchema = new Schema({
  health: { type: Number, required: true },
  attack: { type: Number, required: true },
  defense: { type: Number, required: true },
  magic: { type: Number, required: true },
});

const State =
  mongoose.models.Status || mongoose.model<IStateDocument>("status", stateSchema);

export default State;
