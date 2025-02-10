import { Router } from 'express';
import SimulatedExamController from '@modules/SimulatedExam/controllers/SimulatedExamController';

const router = Router();

router.post('/start', SimulatedExamController.startExam);
router.post('/submit', SimulatedExamController.submitExam);

export default router;
