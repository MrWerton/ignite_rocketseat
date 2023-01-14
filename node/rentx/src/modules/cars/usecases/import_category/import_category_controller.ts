import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoriesUseCase } from "./import_category_usecase";

class ImportCategoriesController {
    handle(request: Request, response: Response): Response {
        const { file } = request;
        const importCategoriesUseCase = container.resolve(
            ImportCategoriesUseCase
        );
        if (file) {
            importCategoriesUseCase.execute(file);
        }
        return response.send();
    }
}

export { ImportCategoriesController };
