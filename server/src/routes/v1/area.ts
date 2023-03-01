import express from "express";
import AreaController from "../../controllers/areaController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const areaRoutes = express.Router();

areaRoutes.post("/area", jwtAuthExpress, AreaController.create);
areaRoutes.delete("/area", jwtAuthExpress, AreaController.delete);

export default areaRoutes;
