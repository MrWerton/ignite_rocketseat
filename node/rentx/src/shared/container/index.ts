import { container } from "tsyringe";

import { IUserRepository } from "../../modules/accounts/repositories/Iuser_repository";
import { UserRepository } from "../../modules/accounts/repositories/user_repository";
import { CategoriesRepository } from "../../modules/cars/repositories/category/category_repository";
import { ICategoriesRepository } from "../../modules/cars/repositories/category/Icategory_repository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/specification/Ispecification_repository";
import { SpecificationsRepository } from "../../modules/cars/repositories/specification/specification_repository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
