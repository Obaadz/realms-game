import { Schema, Types } from "mongoose";

const rewardSchema = new Schema({
  items: [{ quantity: Number, item: { type: Schema.Types.ObjectId, ref: "items" } }],
  experience: Number,
});

export default rewardSchema;
