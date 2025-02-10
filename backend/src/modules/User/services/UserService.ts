import UserRepository from '@modules/User/repositories/UserRepository';
import UserInterface from '@modules/User/ts/interfaces/UserInterface';

export default class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string): Promise<UserInterface> {
    try {
      const user = await this.userRepository.create(name);
      return user;
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }

  async getUserById(user_id: string): Promise<UserInterface | null> {
    try {
      const user = await this.userRepository.findById(user_id);
      return user;
    } catch (error) {
      throw new Error('Erro ao buscar usuário');
    }
  }
}
