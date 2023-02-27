import { ERROR_MESSAGES } from "../types/enums";
import { ICharacterDocument, InitialCharacter } from "../types/character";
import CharacterModel from "../models/character";
import { FilterQuery } from "mongoose";

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
  const dbCharacter: ICharacterDocument = new CharacterModel({
    ...character,
  });

  await dbCharacter.save();

  return findCharacter({ _id: dbCharacter._id });
}

export async function updateCharacter(character: Partial<ICharacterDocument>) {
  await CharacterModel.updateOne({ _id: character._id }, { $set: { ...character } });
}

export async function deleteCharacter(character: Partial<ICharacterDocument>) {
  await CharacterModel.updateOne({ _id: character._id }, { $unset: { _id: 1 } });
}
