import express from "express";
import CharacterController from "../../controllers/characterController";
import { jwtAuthExpress } from "../../middleware/jwtAuth";

const charactersRoutes = express.Router();

charactersRoutes.post("/characters", jwtAuthExpress, CharacterController.create);
charactersRoutes.delete("/characters", jwtAuthExpress, CharacterController.delete);

export default charactersRoutes;
