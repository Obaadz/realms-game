import mongoose, { Schema } from "mongoose";
import stateSchema from "./schemas/state";
import { IRaceDocument } from "../types/race";

const raceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  base_state: { type: stateSchema, required: true },
});

const Race = mongoose.models.races || mongoose.model<IRaceDocument>("races", raceSchema);

export default Race;
