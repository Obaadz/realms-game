import { ERROR_MESSAGES } from "../types/enums";
import { Item, IItemDocument } from "../types/item";
import ItemModel from "../models/item";
import { FilterQuery, UpdateQuery } from "mongoose";

export async function findItem(
  query: FilterQuery<IItemDocument>,
  selectedItems?: string | string[]
) {
  const dbItem: IItemDocument = await ItemModel.findOne(query).select(
    selectedItems ? selectedItems : undefined
  );

  if (!dbItem) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_ITEM);

  return dbItem;
}

export async function insertItem(item: Item) {
  const dbItem: IItemDocument = new ItemModel({
    ...item,
  });

  await dbItem.save();

  return findItem({ _id: dbItem._id });
}

export async function updateItem(
  query: FilterQuery<IItemDocument>,
  update: UpdateQuery<IItemDocument>
) {
  await ItemModel.updateOne(query, update);
}

export async function deleteItem(item: Partial<IItemDocument>) {
  await ItemModel.updateOne({ _id: item._id }, { $unset: { _id: 1 } });
}
