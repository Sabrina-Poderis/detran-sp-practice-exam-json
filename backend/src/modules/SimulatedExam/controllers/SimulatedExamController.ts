import { Request, Response } from 'express';
import SimulatedExamService from '@modules/SimulatedExam/services/SimulatedExamService';

class SimulatedExamController {
  async startExam(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.body;
      const exam = await SimulatedExamService.startExam(userId);
      return res.status(200).json(exam);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async submitExam(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, answers } = req.body;
      const result = await SimulatedExamService.submitExam(userId, answers);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new SimulatedExamController();
