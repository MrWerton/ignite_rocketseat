import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./list_categories_usecase";

class ListCategoriesController {
    async handle(_: Request, response: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
        const allCategories = await listCategoriesUseCase.execute();

        return response.json(allCategories);
    }
}

export { ListCategoriesController };
