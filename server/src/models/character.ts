import mongoose, { Schema } from "mongoose";
import { ICharacterDocument } from "../types/character";
import stateSchema from "./schemas/state";

const characterSchema = new Schema({
  race: { type: Schema.Types.ObjectId, ref: "races", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  state: { type: stateSchema, required: true },
});

const Character =
  mongoose.models.characters ||
  mongoose.model<ICharacterDocument>("characters", characterSchema);

export default Character;
