import { Request, Response } from 'express';
import ResultsService from '@modules/Results/services/ResultsService';

class ResultsController {
  async saveResult(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, score, totalQuestions } = req.body;
      const result = { user_id: userId, score, total_questions: totalQuestions, created_at: new Date() };
      await ResultsService.saveResult(result);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getUserResults(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.params;
      const results = await ResultsService.getUserResults(userId);
      return res.status(200).json(results);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getLatestResult(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.params;
      const result = await ResultsService.getLatestResult(userId);
      if (!result) {
        return res.status(404).json({ message: 'Resultado não encontrado' });
      }
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new ResultsController();
