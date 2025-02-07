import { Request, Response } from 'express';
import QuestionDetranService from '@modules/QuestionDetran/services/QuestionDetranService';
import QuestionDetranMessagesEnum from '@modules/QuestionDetran/ts/enums/QuestionDetranMessagesEnum';

export default class QuestionDetranController {
  private questionService: QuestionDetranService;

  constructor() {
    this.questionService = new QuestionDetranService();
  }

  async getAllQuestions(req: Request, res: Response): Promise<void> {
    try {
      const checked = req.query.checked === 'true';
      const result = await this.questionService.getAllQuestions(checked);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ data: null, message: QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR });
    }
  }

  async getQuestionById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const result = await this.questionService.getQuestionById(id);
      if (result.data) {
        res.status(200).json(result);
      } else {
        res.status(404).json(result);
      }
    } catch (error) {
      res.status(500).json({ data: null, message: QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR });
    }
  }

  async getQuestionsByType(req: Request, res: Response): Promise<void> {
    try {
      const type = req.params.type;
      const checked = req.query.checked === 'true';
      const result = await this.questionService.getQuestionsByType(type, checked);
      if (result.data) {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }
    } catch (error: any) {
      res.status(500).json({ data: null, message: error.message });
    }
  }
}