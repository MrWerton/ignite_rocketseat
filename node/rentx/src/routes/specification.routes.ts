import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/usecases/create_specification/create_specification_controller";

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
