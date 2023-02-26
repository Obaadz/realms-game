import express from "express";
import usersRoutes from "./users";
import charactersRoutes from "./characters";
import racesRoutes from "./races";

const v1Routes = express.Router();

v1Routes.use("/v1", usersRoutes);
v1Routes.use("/v1", charactersRoutes);
v1Routes.use("/v1", racesRoutes);

export default v1Routes;
