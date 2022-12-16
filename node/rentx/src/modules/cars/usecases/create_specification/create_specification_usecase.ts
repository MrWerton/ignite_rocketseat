import { ISpecificationsRepository } from "../../repositories/specification/Ispecification_repository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    private specificationsRepository: ISpecificationsRepository
    constructor(specificationsRepository: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase };
