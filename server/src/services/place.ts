import { ERROR_MESSAGES } from "../types/enums";
import { Place, IPlaceDocument } from "../types/place";
import PlaceModel from "../models/place";
import { FilterQuery, UpdateQuery } from "mongoose";

export async function findPlace(
  query: FilterQuery<IPlaceDocument>,
  selectedItems?: string | string[]
) {
  const dbPlace: IPlaceDocument = await PlaceModel.findOne(query).select(
    selectedItems ? selectedItems : undefined
  );

  if (!dbPlace) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_PLACE);

  return dbPlace;
}

export async function insertPlace(place: Place) {
  const dbPlace: IPlaceDocument = new PlaceModel({
    ...place,
  });

  await dbPlace.save();

  return findPlace({ _id: dbPlace._id });
}

export async function updatePlace(
  query: FilterQuery<IPlaceDocument>,
  update: UpdateQuery<IPlaceDocument>
) {
  await PlaceModel.updateOne(query, update);
}

export async function deletePlace(place: Partial<IPlaceDocument>) {
  await PlaceModel.updateOne({ _id: place._id }, { $unset: { _id: 1 } });
}
