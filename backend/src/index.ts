import express from 'express';
import { connectToDatabase } from '@shared/database/connection';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
// });