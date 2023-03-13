import type { Response } from "express";
import { ERROR_MESSAGES } from "../types/enums";
import { IItemDocument, Item } from "../types/item";
import { JwtAuthExpressRequest } from "../middleware/jwtAuth";
import { UserFromToken } from "../types/user";
import { deleteItem, findItem, insertItem } from "../services/item";

export default class ItemController {
  static async create(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const item: Item = request.body.item,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!(item.name && item.description && item.type && item.icon))
        throw new Error(ERROR_MESSAGES.INCORRECT_ITEM_INPUTS);

      const dbItem = await insertItem(item).catch((err: any) => {
        if (err?.code === 11000) throw new Error(ERROR_MESSAGES.DUPLICATE);

        console.log("Insert Item:", err.message);

        throw new Error(ERROR_MESSAGES.INCORRECT_ITEM_INPUTS);
      });

      response.status(201).send("Item Created");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  static async delete(request: JwtAuthExpressRequest<UserFromToken>, response: Response) {
    try {
      const item: Pick<IItemDocument, "_id"> = request.body.item,
        user = request.auth;

      if (!user?.email) throw new Error(ERROR_MESSAGES.INCORRECT_EMAIL);
      if (!item._id) throw new Error(ERROR_MESSAGES.INCORRECT_ITEM_INPUTS);

      await deleteItem({ _id: item._id });

      response.status(204).send("Item Deleted");
    } catch (err: any) {
      response.status(400).send(err.message || ERROR_MESSAGES.SERVER_ERROR);
    }
  }
}
