import mongoose, { Schema } from "mongoose";
import { IRaceDocument } from "../types/race";
import effectSchema from "./schemas/effect";

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  effect: { type: effectSchema, required: true },
  type: { type: String, required: true },
  icon: { type: String, required: true },
});

const Item = mongoose.models.items || mongoose.model<IRaceDocument>("items", itemSchema);

export default Item;
