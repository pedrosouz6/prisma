import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUser: CreateUserUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        const results = await this.createUser.execute({
            name, 
            email,
            password    
        });

        console.log(results);

        if(results instanceof Error) {
            return res.status(400).json(results.message);
        }

        return res.status(201).json(results);
    }
}