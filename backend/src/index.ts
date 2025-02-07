import 'module-alias/register';
import { connectToDatabase } from '@shared/database/connection';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});