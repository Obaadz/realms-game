import { ERROR_MESSAGES } from "../types/enums";
import { Place, IPlaceDocument } from "../types/place";
import PlaceModel from "../models/place";
import { FilterQuery, UpdateQuery } from "mongoose";
import { IAreaDocument } from "../types/area";
import getDefaultPlaces from "../utils/getDefaultPlaces";

export const defaultPlacesInitalizer = {
  city: initializeDefaultPlacesForCity,
} as { [key: string]: () => Promise<void> };

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

export async function initializePlacesForArea(this: IAreaDocument) {
  try {
    await defaultPlacesInitalizer[this.type].call(this);
  } catch (err: any) {
    console.log("error on initalize places", err.message);
    this.places = [];
  }
}

export async function initializeDefaultPlacesForCity(this: IAreaDocument) {
  const defaultPlace = await getDefaultPlaces();

  const townHall = await insertPlace(defaultPlace.townHall);

  this.places = [townHall._id];
  console.log(this.places);
}
