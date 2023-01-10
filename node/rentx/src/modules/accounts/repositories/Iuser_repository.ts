import { ICreateUserDTO } from "../dtos/create_user_dto";
import { User } from "../entities/user";

export interface IUserRepository {
    createUser(data: ICreateUserDTO): Promise<void>;
    findUserByEmail(email: string): Promise<User | undefined>;
}
