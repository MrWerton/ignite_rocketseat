import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/app_error";
import { UserRepository } from "../modules/accounts/repositories/user_repository";

interface IPayload {
    sub: string;
}
export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "f34fa5ab9805c87d7a19050d14486e82"
        ) as IPayload;
        const repository = new UserRepository();

        const userExists = await repository.findUserById(user_id);
        if (!userExists) {
            throw new AppError("user not exists", 401);
        }
        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
}
