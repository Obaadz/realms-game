import { ERROR_MESSAGES } from "../types/enums";
import { Area, IAreaDocument } from "../types/area";
import AreaModel from "../models/area";
import { FilterQuery, UpdateQuery } from "mongoose";

export async function findArea(
  query: FilterQuery<IAreaDocument>,
  selectedItems?: string | string[]
) {
  const dbArea: IAreaDocument = await AreaModel.findOne(query).select(
    selectedItems ? selectedItems : undefined
  );

  if (!dbArea) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_AREA);

  return dbArea;
}

export async function insertArea(area: Area) {
  const dbArea: IAreaDocument = new AreaModel({
    ...area,
  });

  await dbArea.save();

  return findArea({ _id: dbArea._id });
}

export async function updateArea(
  query: FilterQuery<IAreaDocument>,
  update: UpdateQuery<IAreaDocument>
) {
  await AreaModel.updateOne(query, update);
}

export async function deleteArea(area: Partial<IAreaDocument>) {
  await AreaModel.updateOne({ _id: area._id }, { $unset: { _id: 1 } });
}
