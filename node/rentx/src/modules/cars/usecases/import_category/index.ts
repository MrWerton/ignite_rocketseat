import { CategoriesRepository } from "../../repositories/category/category_repository";
import { ImportCategoriesController } from "./import_category_controller";
import { ImportCategoriesUseCase } from "./import_category_usecase";

export default (): ImportCategoriesController => {
    const categoriesRepository = new CategoriesRepository();
    const importCategoriesUseCase = new ImportCategoriesUseCase(
        categoriesRepository
    );
    const importCategoriesController = new ImportCategoriesController(
        importCategoriesUseCase
    );

    return importCategoriesController;
};
