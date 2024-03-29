import mongoose, { Schema } from "mongoose";
import { IRaceDocument } from "../types/race";

const raceSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  base_state: { type: Schema.Types.ObjectId, required: true, ref: "status" },
});

const Race = mongoose.models.races || mongoose.model<IRaceDocument>("races", raceSchema);

export default Race;
