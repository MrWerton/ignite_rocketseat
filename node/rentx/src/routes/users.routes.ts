import { Router } from "express";

import { CreateUserController } from "../modules/accounts/usecases/create_user/create_user_controller";

export const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);
