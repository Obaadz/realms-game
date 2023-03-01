import mongoose, { Schema } from "mongoose";
import { IAreaDocument } from "../types/area";
import requirementSchema from "./schemas/requirement";
import rewardSchema from "./schemas/reward";

const areaSchema = new Schema({
  name: { type: { type: String, required: true }, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { x: Number, y: Number },
  level: Number,
  places: [{ type: Schema.Types.ObjectId, ref: "places" }],
  isOpen: Boolean,
  requirements: requirementSchema,
});

const Area = mongoose.models.areas || mongoose.model<IAreaDocument>("areas", areaSchema);

export default Area;
