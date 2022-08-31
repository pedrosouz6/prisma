import { User } from "../../entities/User";
import { ICreateUser } from "../ICreateUser";

import { prismaClient } from "../../database/prismaClient";

export class RepositoryCreateUser implements ICreateUser {
    async save(user: User): Promise<User> {
        const results = await prismaClient.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        })

        return results;
    }

    async findById(email: string): Promise<User> {
        const isEmailExists = await prismaClient.user.findUnique({
            where: {
                email
            }
        })

        return isEmailExists;
    }
}