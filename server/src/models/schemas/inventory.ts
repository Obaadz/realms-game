import { Schema } from "mongoose";

const DEFAULT_INVENTORY_SIZE = process.env.DEFAULT_INVENTORY_SIZE || 10;

const inventorySchema = new Schema({
  max: { type: Number, default: DEFAULT_INVENTORY_SIZE },
});

export default inventorySchema;
