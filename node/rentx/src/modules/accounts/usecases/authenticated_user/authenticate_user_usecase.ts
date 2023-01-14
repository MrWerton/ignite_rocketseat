import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/app_error";
import { IUserRepository } from "../../repositories/Iuser_repository";

interface IRequest {
    email: string;
    password: string;
}

interface IAccountData {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
@injectable()
export class AuthenticateUserUseCase {
    private repository: IUserRepository;
    constructor(
        @inject("UserRepository")
        repository: IUserRepository
    ) {
        this.repository = repository;
    }

    async execute({ email, password }: IRequest): Promise<IAccountData> {
        const user = await this.repository.findUserByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect", 400);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect", 400);
        }

        // generated md5
        const token = sign({}, "f34fa5ab9805c87d7a19050d14486e82", {
            subject: user.id,
            expiresIn: "1d",
        });

        const accountData: IAccountData = {
            user: {
                email: user.email,
                name: user.name,
            },
            token,
        };

        return accountData;
    }
}
