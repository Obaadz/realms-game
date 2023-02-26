import { ERROR_MESSAGES } from "../types/enums";
import { ICharacterDocument, Character, InitialCharacter } from "../types/character";
import CharacterModel from "../models/character";
import { FilterQuery } from "mongoose";
import { findRace } from "./race";
import { Race } from "../types/race";

export async function findCharacter(
  query: FilterQuery<ICharacterDocument>,
  selectedItems?: string | string[]
) {
  const dbCharacter: ICharacterDocument = await CharacterModel.findOne(query).select(
    selectedItems ? selectedItems : undefined
  );

  if (!dbCharacter) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_CHARACTER);

  return dbCharacter;
}

export async function insertCharacter(character: InitialCharacter) {
  // TODO: Add default values for other properities
  const dbCharacter: ICharacterDocument = new CharacterModel<InitialCharacter>({
    ...character,
    race: await findRace({ name: (character.race as Partial<Race>).name }),
  });

  await dbCharacter.save();

  return findCharacter({ _id: dbCharacter._id }, ["-_id"]);
}

export async function updateCharacter(character: Partial<ICharacterDocument>) {
  await CharacterModel.updateOne({ _id: character._id }, { $set: { ...character } });
}

export async function deleteCharacter(character: Partial<ICharacterDocument>) {
  await CharacterModel.updateOne({ _id: character._id }, { $unset: { _id: 1 } });
}
