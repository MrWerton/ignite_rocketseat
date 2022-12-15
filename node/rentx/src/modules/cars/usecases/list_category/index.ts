import { CategoriesRepository } from "../../repositories/category/category_repository";
import { ListCategoriesController } from "./list_category_controller";
import { ListCategoriesUseCase } from "./list_category_usecase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };

