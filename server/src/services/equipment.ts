import { FilterQuery, PopulateOption } from "mongoose";
import EquipmentModel from "../models/equipment";
import { ERROR_MESSAGES } from "../types/enums";
import { IEquipmentDocument, Equipment } from "../types/equipment";

export async function findEquipment(
  query: FilterQuery<IEquipmentDocument>,
  selectedItems?: string | string[],
  populateOptions?: PopulateOption["populate"]
) {
  const dbEquipment = (await EquipmentModel.findOne(query)
    .select(selectedItems ? selectedItems : undefined)
    .populate(populateOptions || ("" as any))) as IEquipmentDocument;

  if (!dbEquipment) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_EQUIPMENT);

  return dbEquipment;
}

export async function insertEquipment(Equipment: Equipment) {
  const dbEquipment: IEquipmentDocument = new EquipmentModel<Equipment>({
    ...Equipment,
  });

  await dbEquipment.save();

  return findEquipment({ _id: dbEquipment._id });
}
