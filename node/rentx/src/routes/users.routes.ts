import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensure_authenticated";
import { CreateUserController } from "../modules/accounts/usecases/create_user/create_user_controller";
import { UpdateUserController } from "../modules/accounts/usecases/update_user_avatar/update_user_avatar_controller";

export const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));
const createUserController = new CreateUserController();

const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserController.handle
);
