import type { Response } from "express";
import { ERROR_MESSAGES } from "../types/enums";
import { IPlaceDocument, Place } from "../types/place";
import { JwtAuthExpressRequest } from "../middleware/jwtAuth";
import { UserFromToken } from "../types/user";
import { deletePlace, findPlace, insertPlace } from "../services/place";

export default class PlaceController {
  static async create(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const place: Place = request.body.place,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!(place.name && place.description && place.type && place.image))
        throw new Error(ERROR_MESSAGES.INCORRECT_PLACE_INPUTS);

      const dbPlace = await insertPlace(place).catch((err: any) => {
        if (err?.code === 11000) throw new Error(ERROR_MESSAGES.DUPLICATE);

        console.log("Insert Place:", err.message);

        throw new Error(ERROR_MESSAGES.INCORRECT_PLACE_INPUTS);
      });

      response.status(201).send("Place Created");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async delete(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const place: Pick<IPlaceDocument, "_id"> = request.body.place,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!place._id) throw new Error(ERROR_MESSAGES.INCORRECT_PLACE_INPUTS);

      await deletePlace({ _id: place._id });

      response.status(204).send("Place Deleted");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
