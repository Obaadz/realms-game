import express from "express";
import PlaceController from "../../controllers/placeController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const placeRoutes = express.Router();

placeRoutes.post("/place", jwtAuthExpress, PlaceController.create);
placeRoutes.delete("/place", jwtAuthExpress, PlaceController.delete);

export default placeRoutes;
