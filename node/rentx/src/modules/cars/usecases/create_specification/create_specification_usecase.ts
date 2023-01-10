import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/app_error";
import { ISpecificationsRepository } from "../../repositories/specification/Ispecification_repository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    private specificationsRepository: ISpecificationsRepository;
    constructor(
        @inject("SpecificationsRepository")
        specificationsRepository: ISpecificationsRepository
    ) {
        this.specificationsRepository = specificationsRepository;
    }

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError("Specification already exists!", 401);
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
