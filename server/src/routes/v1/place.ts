import express from "express";
import PlaceController from "../../controllers/placeController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const placeRoutes = express.Router();

placeRoutes.post("/places", jwtAuthExpress, PlaceController.create);
placeRoutes.delete("/places", jwtAuthExpress, PlaceController.delete);

export default placeRoutes;
