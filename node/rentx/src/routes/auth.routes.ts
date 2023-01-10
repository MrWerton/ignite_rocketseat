import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/usecases/authenticated_user/authenticate_user_controller";

export const authRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
authRoutes.post("/", authenticateUserController.handle);
