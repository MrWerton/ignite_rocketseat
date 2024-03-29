import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/create_user_dto";
import { User } from "../entities/user";
import { IUserRepository } from "./Iuser_repository";

export class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async findUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.repository.findOne({ email });
        return user;
    }
    async findUserById(id: string): Promise<User | undefined> {
        const user = await this.repository.findOne(id);
        return user;
    }

    async createUser(data: ICreateUserDTO): Promise<void> {
        const { name, email, password, drive_license, avatar, id } = data;
        const user = this.repository.create({
            name,
            drive_license,
            password,
            email,
            avatar,
            id,
        });
        await this.repository.save(user);
    }
}
