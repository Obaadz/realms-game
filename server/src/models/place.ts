import mongoose, { Schema, Types } from "mongoose";
import { IPlaceDocument } from "../types/place";
import effectSchema from "./schemas/effect";
import requirementSchema from "./schemas/requirement";
import rewardSchema from "./schemas/reward";

const placeSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { x: Number, y: Number },
  level: Number,
  requirements: [requirementSchema],
  inventory: Schema.Types.ObjectId,
  rewards: [rewardSchema],
  effect: effectSchema,
});

const Place =
  mongoose.models.places || mongoose.model<IPlaceDocument>("places", placeSchema);

export default Place;
