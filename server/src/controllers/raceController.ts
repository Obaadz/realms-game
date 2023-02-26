import type { Response } from "express";
import { ERROR_MESSAGES } from "../types/enums";
import { IRaceDocument, Race } from "../types/race";
import { JwtAuthExpressRequest } from "../middleware/jwtAuth";
import { UserFromToken } from "../types/user";
import { deleteRace, findRaces, insertRace } from "../services/race";
import { insertState } from "../services/state";
import { State } from "../types/state";

export default class RaceController {
  static async get(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);

      const dbRaces = await findRaces({}, "-__v", { path: "base_state", select: "-__v" });

      response.status(200).send({ races: dbRaces });
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
  static async create(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const race: Race = request.body.race,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!(race.name && race.description && race.base_state))
        throw new Error(ERROR_MESSAGES.INCORRECT_RACE_INPUTS);

      const state = await insertState(race.base_state as State).catch((err: any) => {
        console.log("Insert State in Insert Race controller:", err.message);

        throw new Error(ERROR_MESSAGES.INCORRECT_RACE_INPUTS);
      });

      race.base_state = state._id;

      await insertRace(race).catch((err: any) => {
        if (err?.code === 11000) throw new Error(ERROR_MESSAGES.DUPLICATE);

        console.log("Insert Race:", err.message);

        throw new Error(ERROR_MESSAGES.INCORRECT_RACE_INPUTS);
      });

      response.status(201).send("Race Created");
    } catch (err: any) {
      response.status(401).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async delete(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const race: Pick<IRaceDocument, "_id"> = request.body.race,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!race._id) throw new Error(ERROR_MESSAGES.INCORRECT_RACE_INPUTS);

      await deleteRace(race).catch((err: any) => {
        throw new Error(ERROR_MESSAGES.INCORRECT_RACE_INPUTS);
      });

      response.status(204).send("Race Deleted");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
