import { SpecificationsRepository } from "../../repositories/specification/specification_repository";
import { CreateSpecificationController } from "./create_specification_controller";
import { CreateSpecificationUseCase } from "./create_specification_usecase";

const specificationRepository = new SpecificationsRepository();

const specificationUseCase = new CreateSpecificationUseCase(
    specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    specificationUseCase
);

export { createSpecificationController };
