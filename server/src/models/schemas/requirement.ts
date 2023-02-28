import { Schema, Types } from "mongoose";

const requirementSchema = new Schema({
  items: [{ quantity: Number, item: { type: Types.ObjectId, ref: "items" } }],
  level: Number,
});

export default requirementSchema;
