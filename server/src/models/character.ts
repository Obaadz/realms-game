import mongoose, { Schema } from "mongoose";
import { insertEquipment } from "../services/equipment";
import { insertInventory } from "../services/inventory";
import { insertState } from "../services/state";
import { ICharacterDocument } from "../types/character";
import { IRaceDocument } from "../types/race";
import { IStateDocument } from "../types/state";
import getExpPercentageForNextLevel from "../utils/getExpPercentageForNextLevel";
import getLevelByTotalExp from "../utils/getLevelByTotalExp";

const characterSchema = new Schema({
  race: { type: Schema.Types.ObjectId, ref: "races", required: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  experience: { type: Number, default: 0 },
  state: { type: mongoose.Types.ObjectId, ref: "status" },
  inventory: { type: mongoose.Types.ObjectId, ref: "inventories" },
  equipment: { type: mongoose.Types.ObjectId, ref: "equipments" },
});

characterSchema.post("save", async function (this: ICharacterDocument) {
  if (!(this.state && this.inventory && this.equipment)) {
    await Promise.all([
      initalizeStateForCharacter.call(this),
      initalizeInventoryForCharacter.call(this),
      initalizeEquipmentForCharacter.call(this),
    ]);

    await this.save();
  }
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

async function initalizeStateForCharacter(this: ICharacterDocument) {
  await this.populate({
    path: "race",
    select: "base_state",
    populate: { path: "base_state", select: "-_id -__v" },
  });

  const state = (this.race as IRaceDocument).base_state as IStateDocument;

  const dbState = await insertState(state.toObject());

  this.state = dbState._id;
}

async function initalizeInventoryForCharacter(this: ICharacterDocument) {
  const dbInventory = await insertInventory({ character: this._id });

  this.inventory = dbInventory._id;
}

async function initalizeEquipmentForCharacter(this: ICharacterDocument) {
  const dbEquipment = await insertEquipment({ character: this._id });

  this.equipment = dbEquipment._id;
}
