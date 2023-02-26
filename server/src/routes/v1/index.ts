import express from "express";
import usersRoutes from "./users";
import charactersRoutes from "./characters";

const v1Routes = express.Router();

v1Routes.use("/v1", usersRoutes);
v1Routes.use("/v1", charactersRoutes);

export default v1Routes;
