import express from "express";
import usersRoutes from "./users";
import charactersRoutes from "./characters";
import racesRoutes from "./races";
import areaRoutes from "./area";
import placeRoutes from "./place";

const v1Routes = express.Router();

v1Routes.use("/v1", usersRoutes);
v1Routes.use("/v1", racesRoutes);
v1Routes.use("/v1", charactersRoutes);
v1Routes.use("/v1", areaRoutes);
v1Routes.use("/v1", placeRoutes);

export default v1Routes;
