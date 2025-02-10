import { Router } from 'express';
import ResultsController from '@modules/Results/controllers/ResultsController';

const router = Router();

router.post('/results', ResultsController.saveResult);
router.get('/results/:userId', ResultsController.getUserResults);
router.get('/results/latest/:userId', ResultsController.getLatestResult);

export default router;
