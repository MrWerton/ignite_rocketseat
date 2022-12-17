import { CategoriesRepository } from "../../repositories/category/category_repository";
import { ListCategoriesController } from "./list_categories_controller";
import { ListCategoriesUseCase } from "./list_categories_usecase";

export default (): ListCategoriesController => {
    const categoriesRepository = new CategoriesRepository();
    const listCategoriesUseCase = new ListCategoriesUseCase(
        categoriesRepository
    );
    const listCategoriesController = new ListCategoriesController(
        listCategoriesUseCase
    );
    return listCategoriesController;
};
