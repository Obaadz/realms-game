import type { Response } from "express";
import { ERROR_MESSAGES } from "../types/enums";
import { ICharacterDocument, InitialCharacter } from "../types/character";
import { JwtAuthExpressRequest } from "../middleware/jwtAuth";
import { UserFromToken } from "../types/user";
import { countUserCharacters, updateUser } from "../services/user";
import { deleteCharacter, findCharacter, insertCharacter } from "../services/character";
import { Race } from "../types/race";
import { findRace } from "../services/race";

const MAX_CHARACTERS_COUNT = Number(process.env.MAX_CHARACTERS_COUNT) || 3;

export default class CharacterController {
  static async create(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const character: InitialCharacter = request.body.character,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!(character.name && character.description && character.race && character.image))
        throw new Error(ERROR_MESSAGES.INCORRECT_CHARACTER_INPUTS);

      const charactersCount = await countUserCharacters({ email: user.email });

      if (charactersCount >= MAX_CHARACTERS_COUNT)
        throw new Error(ERROR_MESSAGES.REACH_CHARACTERS_COUNT);

      const race = await findRace({ name: (character.race as Race).name }, "_id");

      character.race = race._id;

      const dbCharacter = await insertCharacter(character).catch((err: any) => {
        if (err?.code === 11000) throw new Error(ERROR_MESSAGES.DUPLICATE);

        console.log("Insert Character:", err.message);

        throw new Error(ERROR_MESSAGES.INCORRECT_CHARACTER_INPUTS);
      });

      await updateUser({ email: user.email }, { $push: { characters: dbCharacter._id } });

      response.status(201).send("Character Created");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async delete(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const character: Pick<ICharacterDocument, "_id"> = request.body.character,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!character._id) throw new Error(ERROR_MESSAGES.INCORRECT_CHARACTER_INPUTS);

      await deleteCharacter(character).catch((err: any) => {
        throw new Error(ERROR_MESSAGES.INCORRECT_CHARACTER_INPUTS);
      });

      response.status(204).send("Character Deleted");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
