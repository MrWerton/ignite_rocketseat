import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/Iuser_repository";

interface IRequestParams {
    name: string;
    email: string;
    password: string;
    drive_license: string;
}
@injectable()
export class CreateUserUseCase {
    private repository: IUserRepository;

    constructor(
        @inject("UserRepository")
        repository: IUserRepository
    ) {
        this.repository = repository;
    }

    async execute(params: IRequestParams): Promise<void> {
        const { name, email, password, drive_license } = params;
        const passwordHash = await hash(password, 8);
        const userAlreadyExists = await this.repository.findUserByEmail(email);
        if (userAlreadyExists) {
            throw new Error("userr already exists");
        }
        await this.repository.createUser({
            name,
            email,
            password: passwordHash,
            drive_license,
        });
    }
}
