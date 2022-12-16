import { CategoriesRepository } from "../../repositories/category/category_repository";
import { ImportCategoriesController } from "./import_category_controller";
import { ImportCategoriesUseCase } from "./import_category_usecase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(
    categoriesRepository
);
const importCategoriesController = new ImportCategoriesController(
    importCategoriesUseCase
);

export { importCategoriesController };
