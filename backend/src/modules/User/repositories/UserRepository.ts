import UserModel from '@modules/User/models/UserModel';
import UserInterface from '@modules/User/ts/interfaces/UserInterface';

export default class UserRepository {
  async findById(user_id: string): Promise<UserInterface | null> {
    return UserModel.findOne({ user_id }).exec();
  }

  async create(name: string): Promise<UserInterface> {
    const user = new UserModel({ name });
    await user.save();
    return user;
  }
}
