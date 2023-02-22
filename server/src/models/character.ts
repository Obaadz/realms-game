import mongoose, { Schema } from "mongoose";
import { ICharacterDocument } from "../types/character";

const characterSchema = new Schema({
  race: { type: Schema.Types.ObjectId, ref: "races", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  state: { type: mongoose.Types.ObjectId, ref: "status", required: true },
  inventory: { type: mongoose.Types.ObjectId, ref: "inventories", required: true },
  equipment: { type: mongoose.Types.ObjectId, ref: "equipments", required: true },
});

const Character =
  mongoose.models.characters ||
  mongoose.model<ICharacterDocument>("characters", characterSchema);

export default Character;
