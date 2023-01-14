import { Category } from "../../../entities/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../../typeorm/category/Icategory_repository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = [];
    async findByName(name: string): Promise<Category | undefined> {
        const category = this.categories.find(
            (category) => category.name === name
        );

        return category;
    }
    async list(): Promise<Category[]> {
        return this.categories;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, { name, description });

        this.categories.push(category);
    }
}

export { CategoriesRepositoryInMemory };
