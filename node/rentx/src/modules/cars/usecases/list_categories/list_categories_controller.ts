import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./list_categories_usecase";

class ListCategoriesController {
    private listCategoriesUseCase: ListCategoriesUseCase;
    constructor(listCategoriesUseCase: ListCategoriesUseCase) {
        this.listCategoriesUseCase = listCategoriesUseCase;
    }
    async handle(_: Request, response: Response): Promise<Response> {
        const allCategories = await this.listCategoriesUseCase.execute();

        return response.json(allCategories);
    }
}

export { ListCategoriesController };
