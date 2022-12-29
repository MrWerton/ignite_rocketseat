import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "./Ispecification_repository";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification | undefined> {
        const specification = await this.repository.findOne({ name });

        return specification;
    }
}

export { SpecificationsRepository };
