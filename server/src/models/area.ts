import mongoose, { Schema } from "mongoose";
import { IAreaDocument } from "../types/area";
import requirementSchema from "./schemas/requirement";

const areaSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { x: Number, y: Number },
  level: Number,
  places: [{ type: Schema.Types.ObjectId, ref: "places" }],
  requirements: requirementSchema,
});

const Area = mongoose.models.areas || mongoose.model<IAreaDocument>("areas", areaSchema);

export default Area;
