import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/app_error";
import { deleteFile } from "../../../../utils/file";
import { IUserRepository } from "../../repositories/Iuser_repository";

interface IRequest {
    userId: string;
    avatarFile: string;
}
@injectable()
class UpdateUserUseCase {
    private repository: IUserRepository;

    constructor(
        @inject("UserRepository")
        repository: IUserRepository
    ) {
        this.repository = repository;
    }

    async execute({ userId, avatarFile }: IRequest) {
        const user = await this.repository.findUserById(userId);
        if (user) {
            if (user.avatar) {
                const path = `./tmp/avatar${user.avatar}`;
                await deleteFile(path);
            }
            user.avatar = avatarFile;
            await this.repository.createUser(user);
        } else {
            throw new AppError("user not exists", 400);
        }
    }
}

export { UpdateUserUseCase };
