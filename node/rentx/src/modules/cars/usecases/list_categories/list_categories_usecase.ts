import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/typeorm/category/Icategory_repository";

@injectable()
class ListCategoriesUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(
        @inject("CategoriesRepository")
        categoriesRepository: ICategoriesRepository
    ) {
        this.categoriesRepository = categoriesRepository;
    }

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
