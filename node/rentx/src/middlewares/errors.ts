import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/app_error";

export function handleErrors(
    error: Error,
    req: Request,
    response: Response,
    next: NextFunction
) {
    if (error instanceof AppError) {
        return response
            .status(error.statusCode)
            .json({ message: error.message });
    }

    return response.send(500).json({
        status: "error",
        message: `Internal server error: ${error.message}`,
    });
}
