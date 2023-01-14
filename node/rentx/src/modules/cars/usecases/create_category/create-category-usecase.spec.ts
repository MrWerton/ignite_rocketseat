import { AppError } from "../../../../errors/app_error";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/categories/category-repository-in-memory";
import { ICategoriesRepository } from "../../repositories/typeorm/category/Icategory_repository";
import { CreateCategoryUseCase } from "./create_category_usecase";

let categoryRepositoryMock: ICategoriesRepository;
let sut: CreateCategoryUseCase;
describe("create category", () => {
    beforeEach(() => {
        categoryRepositoryMock = new CategoriesRepositoryInMemory();
        sut = new CreateCategoryUseCase(categoryRepositoryMock);
    });

    it("not should be able create category with same name", async () => {
        const categorySpy = {
            name: "category-test",
            description: "description-test",
        };
        expect(async () => {
            await sut.execute(categorySpy);
            await sut.execute(categorySpy);
        }).rejects.toBeInstanceOf(AppError);
    });
    it("should be able create category a new category", async () => {
        const categorySpy = {
            name: "category-test",
            description: "description-test",
        };
        await sut.execute(categorySpy);

        const categoryCreated = await categoryRepositoryMock.findByName(
            categorySpy.name
        );

        expect(categoryCreated).toHaveProperty("id");
    });
});
