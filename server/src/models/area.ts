import mongoose, { Schema } from "mongoose";
import { initializePlacesForArea } from "../services/place";
import { IAreaDocument } from "../types/area";
import requirementSchema from "./schemas/requirement";

const areaSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { x: Number, y: Number },
  level: Number,
  places: { type: [Schema.Types.ObjectId], ref: "places" },
  requirements: requirementSchema,
});

areaSchema.post("save", async function (this: IAreaDocument) {
  if (!this.places || this.places.length === 0) {
    console.log("HERE");
    await initializePlacesForArea.call(this);

    await this.save();
  }
});

const Area = mongoose.models.areas || mongoose.model<IAreaDocument>("areas", areaSchema);

export default Area;
