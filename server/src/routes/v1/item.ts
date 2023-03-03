import express from "express";
import ItemController from "../../controllers/itemController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const itemRoutes = express.Router();

itemRoutes.post("/items", jwtAuthExpress, ItemController.create);
itemRoutes.delete("/items", jwtAuthExpress, ItemController.delete);

export default itemRoutes;
