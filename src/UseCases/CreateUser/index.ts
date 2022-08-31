import { RepositoryCreateUser } from "../../repositories/implamentations/RepositoryCreateUser";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const repositoryCreateUser = new RepositoryCreateUser();
const createUserUseCase = new CreateUserUseCase(repositoryCreateUser);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };