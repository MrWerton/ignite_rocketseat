import { Specification } from "../../entities/specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification | undefined>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
