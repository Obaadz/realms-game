import mongoose, { Schema } from "mongoose";
import { IEquipmentDocument } from "../types/equipment";

const equipmentSchema = new Schema({
  character: { type: mongoose.Types.ObjectId, ref: "characters", required: true },
  head: { type: mongoose.Types.ObjectId, ref: "items" },
  chest: { type: mongoose.Types.ObjectId, ref: "items" },
  boots: { type: mongoose.Types.ObjectId, ref: "items" },
  weapon: { type: mongoose.Types.ObjectId, ref: "items" },
  backpack: { type: mongoose.Types.ObjectId, ref: "items" },
});

const Equipment =
  mongoose.models.equipments ||
  mongoose.model<IEquipmentDocument>("equipments", equipmentSchema);

export default Equipment;
