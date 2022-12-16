import { Specification } from "../../entities/specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
};

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO): void,
    findByName(name: string): Specification | undefined,
};

export { ISpecificationsRepository, ICreateSpecificationDTO };
