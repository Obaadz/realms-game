import { Schema } from "mongoose";

const stateSchema = new Schema({
  health: { type: Number, required: true },
  defense: { type: Number, required: true },
  attack: { type: Number, required: true },
  magic: { type: Number, required: true },
});

export default stateSchema;
