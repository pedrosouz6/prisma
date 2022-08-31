import { User } from "../../entities/User";
import { ICreateUser } from "../../repositories/ICreateUser";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private repositoryCreateUser: ICreateUser
    ) {}

    async execute(datas: CreateUserDTO): Promise<User | Error> {
        const isEmailExists = await this.repositoryCreateUser.findById(datas.email);

        console.log(isEmailExists);

        if(isEmailExists) {
            return new Error("o email ja existe");
        }

        const user = new User(datas); 

        const respost = await this.repositoryCreateUser.save(user);

        return respost
    }
}