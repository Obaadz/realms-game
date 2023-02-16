import mongoose, { Schema } from "mongoose";
import { stateSchema } from "./status";

const raceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  base_state: { type: stateSchema, required: true },
});

const Race = mongoose.models.races || mongoose.model("races", raceSchema);

export default Race;
