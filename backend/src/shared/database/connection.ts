import mongoose from 'mongoose';
import 'dotenv/config';

export const connectToDatabase = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/detran-quiz';
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};