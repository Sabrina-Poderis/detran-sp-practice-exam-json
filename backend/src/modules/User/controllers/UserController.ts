import { Request, Response } from 'express';
import UserService from '@modules/User/services/UserService';

const userService = new UserService();

export default class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    try {
      const user = await userService.createUser(name);
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;

    try {
      const user = await userService.getUserById(user_id);
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({ message: 'Usuário não encontrado' });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
