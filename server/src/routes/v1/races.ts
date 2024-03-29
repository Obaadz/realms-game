import express from "express";
import RaceController from "../../controllers/raceController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const racesRoutes = express.Router();

racesRoutes.get("/races", jwtAuthExpress, RaceController.get);
racesRoutes.post("/races", jwtAuthExpress, RaceController.create);
racesRoutes.delete("/races", jwtAuthExpress, RaceController.delete);

export default racesRoutes;
