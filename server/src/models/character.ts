import mongoose, { Schema } from "mongoose";
import { ICharacterDocument } from "../types/character";
import getExpPercentageForNextLevel from "../utils/getExpPercentageForNextLevel";
import getLevelByTotalExp from "../utils/getLevelByTotalExp";

const characterSchema = new Schema({
  race: { type: Schema.Types.ObjectId, ref: "races", required: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  experience: { type: Number, default: 0, required: true },
  state: { type: mongoose.Types.ObjectId, ref: "status", required: true },
  inventory: { type: mongoose.Types.ObjectId, ref: "inventories", required: true },
  equipment: { type: mongoose.Types.ObjectId, ref: "equipments", required: true },
});

characterSchema.virtual("level").get(function () {
  return getLevelByTotalExp(this.experience);
});

characterSchema.virtual("experience_percentage").get(function (this: ICharacterDocument) {
  return getExpPercentageForNextLevel(this.experience, this.level + 1);
});

const Character =
  mongoose.models.characters ||
  mongoose.model<ICharacterDocument>("characters", characterSchema);

export default Character;
