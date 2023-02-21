import { Schema } from "mongoose";

const effectSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

export default effectSchema;
