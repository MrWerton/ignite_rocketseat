import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/category/Icategory_repository";

class ListCategoriesUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
