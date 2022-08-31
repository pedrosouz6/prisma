import { User } from "../entities/User";

export interface ICreateUser {
    save(user: User): Promise<User>,
    findById(email: string): Promise<User>
}