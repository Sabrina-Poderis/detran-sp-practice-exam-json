import express from 'express';
import QuestionDetranController from '@modules/QuestionDetran/controllers/QuestionDetranController';

const router = express.Router();
const questionController = new QuestionDetranController();

router.get('/', questionController.getAllQuestions.bind(questionController));
router.get('/:id', questionController.getQuestionById.bind(questionController));
router.get('/type/:type', questionController.getQuestionsByType.bind(questionController));

export default router;