import { Schema, Types } from "mongoose";
import effectSchema from "./effect";

const requirementSchema = new Schema({
  forLevel: { type: Number, required: true },
  neededItems: {
    type: [{ quantity: Number, item: { type: Schema.Types.ObjectId, ref: "items" } }],
    required: true,
  },
  newEffect: { type: effectSchema, required: true },
});

export default requirementSchema;
