import { Router } from "express";

import { createCategoryController } from "../modules/cars/usecases/create_category";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

export { categoriesRoutes };

