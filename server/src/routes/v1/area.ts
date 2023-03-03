import express from "express";
import AreaController from "../../controllers/areaController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const areaRoutes = express.Router();

areaRoutes.post("/areas", jwtAuthExpress, AreaController.create);
areaRoutes.delete("/areas", jwtAuthExpress, AreaController.delete);

export default areaRoutes;
