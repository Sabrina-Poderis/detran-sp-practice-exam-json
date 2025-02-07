import 'module-alias/register';
import { connectToDatabase } from '@shared/database/connection';
import questionRoutes from '@modules/QuestionDetran/routes';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/questions', questionRoutes);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});