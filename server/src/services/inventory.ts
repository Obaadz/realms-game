import { FilterQuery, PopulateOption } from "mongoose";
import InventoryModel from "../models/inventory";
import { ERROR_MESSAGES } from "../types/enums";
import { IInventoryDocument, InitialInventory, Inventory } from "../types/inventory";

export async function findInventory(
  query: FilterQuery<IInventoryDocument>,
  selectedItems?: string | string[],
  populateOptions?: PopulateOption["populate"]
) {
  const dbInventory = (await InventoryModel.findOne(query)
    .select(selectedItems ? selectedItems : undefined)
    .populate(populateOptions || ("" as any))) as IInventoryDocument;

  if (!dbInventory) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_INVENTORY);

  return dbInventory;
}

export async function insertInventory(inventory: InitialInventory) {
  const dbInventory: IInventoryDocument = new InventoryModel<InitialInventory>({
    ...inventory,
  });

  await dbInventory.save();

  return findInventory({ _id: dbInventory._id });
}
