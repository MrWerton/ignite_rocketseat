import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./authenticate_user_usecase";

export class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const authenticateUserUseCase = container.resolve(
            AuthenticateUserUseCase
        );

        const accountData = await authenticateUserUseCase.execute({
            email,
            password,
        });

        return response.status(201).json(accountData);
    }
}
