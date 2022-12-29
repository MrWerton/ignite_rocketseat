import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/usecases/create_category/create_category_controller";
import importCategoriesController from "../modules/cars/usecases/import_category";
import listCategoriesController from "../modules/cars/usecases/list_categories";

const createCategoryController = new CreateCategoryController();

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController().handle(request, response);
});
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoriesController().handle(request, response);
});
export { categoriesRoutes };
