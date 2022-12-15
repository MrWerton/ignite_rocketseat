import { CategoriesRepository } from "../../repositories/category/category_repository";
import { CreateCategoryController } from "./create_category_controller";
import { CreateCategoryUseCase } from "./create_category_usecase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };

