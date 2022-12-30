import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/usecases/create_category/create_category_controller";
import { ImportCategoriesController } from "../modules/cars/usecases/import_category/import_category_controller";
import { ListCategoriesController } from "../modules/cars/usecases/list_categories/list_categories_controller";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoriesController();
const importCategoryController = new ImportCategoriesController();

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);
categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);
export { categoriesRoutes };
