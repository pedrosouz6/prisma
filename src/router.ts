import { Router } from 'express';
import { createUserController } from './UseCases/CreateUser';

const router = Router();

router.post('/create-user', (req, res) => {
    createUserController.handle(req, res);
})

export { router };