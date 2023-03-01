import type { Response } from "express";
import { ERROR_MESSAGES } from "../types/enums";
import { IAreaDocument, Area } from "../types/area";
import { JwtAuthExpressRequest } from "../middleware/jwtAuth";
import { UserFromToken } from "../types/user";
import { deleteArea, findArea, insertArea } from "../services/area";

export default class AreaController {
  static async create(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const area: Area = request.body.area,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!(area.name && area.description && area.type && area.image))
        throw new Error(ERROR_MESSAGES.INCORRECT_AREA_INPUTS);

      const dbArea = await insertArea(area).catch((err: any) => {
        if (err?.code === 11000) throw new Error(ERROR_MESSAGES.DUPLICATE);

        console.log("Insert Area:", err.message);

        throw new Error(ERROR_MESSAGES.INCORRECT_AREA_INPUTS);
      });

      response.status(201).send("Area Created");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async delete(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const area: Pick<IAreaDocument, "_id"> = request.body.area,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!area._id) throw new Error(ERROR_MESSAGES.INCORRECT_AREA_INPUTS);

      await deleteArea({ _id: area._id });

      response.status(204).send("Area Deleted");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
