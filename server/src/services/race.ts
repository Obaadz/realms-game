import { ERROR_MESSAGES } from "../types/enums";
import { IRaceDocument, Race } from "../types/race";
import RaceModel from "../models/race";
import { FilterQuery } from "mongoose";
import { insertState } from "./state";
import { State } from "../types/state";

export async function findRace(
  query: FilterQuery<IRaceDocument>,
  selectedItems?: string | string[]
) {
  const dbRace: IRaceDocument | null = await RaceModel.findOne(query).select(
    selectedItems ? selectedItems : undefined
  );

  if (!dbRace) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_RACE);

  return dbRace;
}

export async function findRaces(
  query: FilterQuery<IRaceDocument>,
  selectedItems?: string | string[]
) {
  const dbRaces: IRaceDocument[] = await RaceModel.find(query).select(
    selectedItems ? selectedItems : undefined
  );

  return dbRaces;
}

export async function insertRace(race: Race) {
  const dbRace: IRaceDocument = new RaceModel<Race>({
    ...race,
  });

  await dbRace.save();

  return findRace({ name: dbRace.name });
}

export async function updateRace(race: Partial<IRaceDocument>) {
  await RaceModel.updateOne({ race: race.name }, { $set: { ...race } });

  return true;
}

export async function deleteRace(race: Partial<IRaceDocument>) {
  await RaceModel.updateOne({ name: race.name }, { $unset: { name: 1 } });

  return true;
}
