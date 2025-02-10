import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import UserInterface from '@modules/User/ts/interfaces/UserInterface';

const UserSchema = new Schema<UserInterface>({
  user_id: { 
    type: String, 
    required: true, 
    default: uuidv4,
    unique: true 
  },
  name: { type: String, required: true }
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

const UserModel = model<UserInterface>('User', UserSchema);

export default UserModel;
