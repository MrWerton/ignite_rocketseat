import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/cars/repositories/category/category_repository";
import { ICategoriesRepository } from "../../modules/cars/repositories/category/Icategory_repository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
