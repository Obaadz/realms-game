import mongoose, { Schema } from "mongoose";
import { IInventoryDocument } from "../types/inventory";

const DEFAULT_INVENTORY_SIZE = process.env.DEFAULT_INVENTORY_SIZE || 10;

const inventorySchema = new Schema({
  max: { type: Number, default: DEFAULT_INVENTORY_SIZE },
  character: { type: mongoose.Types.ObjectId, ref: "characters", required: true },
  items: [{ quantity: Number, item: { type: mongoose.Types.ObjectId, ref: "items" } }],
});

const Inventory =
  mongoose.models.inventories ||
  mongoose.model<IInventoryDocument>("inventories", inventorySchema);

export default Inventory;
