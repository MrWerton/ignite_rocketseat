import { Category } from "../../entities/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO
} from "./Icategory_repository_imp";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private constructor() {
        this.categories = [];
    }
    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: CategoriesRepository;

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category: Category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name
        );

        return category!;
    }
}

export { CategoriesRepository };
