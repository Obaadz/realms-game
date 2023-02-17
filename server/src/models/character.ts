import mongoose, { Schema } from "mongoose";
import { ICharacterDocument } from "../types/character";

const characterSchema = new Schema({
  race: { type: Schema.Types.ObjectId, ref: "races", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Character =
  mongoose.models.characters ||
  mongoose.model<ICharacterDocument>("characters", characterSchema);

export default Character;
