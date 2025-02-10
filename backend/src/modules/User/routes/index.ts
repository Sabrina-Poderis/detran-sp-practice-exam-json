import { Router } from 'express';
import UserController from '@modules/User/controllers/UserController';

const userController = new UserController();
const userRoutes = Router();

userRoutes.post('/users', userController.create);
userRoutes.get('/users/:user_id', userController.getById); 

export default userRoutes;
