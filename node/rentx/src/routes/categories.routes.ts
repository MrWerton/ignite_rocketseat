import { Router } from "express";

import { createCategoryController } from "../modules/cars/usecases/create_category";
import { listCategoriesController } from "../modules/cars/usecases/list_category";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };

