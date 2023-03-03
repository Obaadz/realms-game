import mongoose, { Schema } from "mongoose";
import { IEquipmentDocument } from "../types/equipment";

const equipmentSchema = new Schema({
  character: { type: Schema.Types.ObjectId, ref: "characters", required: true },
  head: { type: Schema.Types.ObjectId, ref: "items" },
  chest: { type: Schema.Types.ObjectId, ref: "items" },
  boots: { type: Schema.Types.ObjectId, ref: "items" },
  weapon: { type: Schema.Types.ObjectId, ref: "items" },
  backpack: { type: Schema.Types.ObjectId, ref: "items" },
});

const Equipment =
  mongoose.models.equipments ||
  mongoose.model<IEquipmentDocument>("equipments", equipmentSchema);

export default Equipment;
