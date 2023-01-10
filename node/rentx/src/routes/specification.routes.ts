import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensure_authenticated";
import { CreateSpecificationController } from "../modules/cars/usecases/create_specification/create_specification_controller";

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
