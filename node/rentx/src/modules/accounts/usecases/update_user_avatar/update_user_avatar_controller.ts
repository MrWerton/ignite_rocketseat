import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./update_user_avatar_usecase";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const avatarFile = request.file?.fieldname ?? "";
        const { id } = request.user;
        console.log(id, "ididiid");
        console.log(avatarFile, "laalal");

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        await updateUserUseCase.execute({ userId: id, avatarFile });

        return response.sendStatus(204);
    }
}

export { UpdateUserController };
