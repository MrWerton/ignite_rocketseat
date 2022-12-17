import { CategoriesRepository } from "../../repositories/category/category_repository";
import { CreateCategoryController } from "./create_category_controller";
import { CreateCategoryUseCase } from "./create_category_usecase";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoriesRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(
        categoriesRepository
    );
    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );
    return createCategoryController;
};
