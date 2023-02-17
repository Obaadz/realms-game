import express from "express";
import UserController from "../../controllers/userController";

const usersRoutes = express.Router();

usersRoutes.post("/users/login", UserController.login);
usersRoutes.post("/users/register", UserController.register);

export default usersRoutes;
