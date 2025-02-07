import { Request, Response } from 'express';
import QuestionDetranService from '@modules/QuestionDetran/services/QuestionDetranService';
import QuestionTypeEnum from '@modules/QuestionDetran/ts/enum/QuestionTypeEnum';

export default class QuestionDetranController {
  private questionService: QuestionDetranService;

  constructor() {
    this.questionService = new QuestionDetranService();
  }

  async getAllQuestions(req: Request, res: Response): Promise<void> {
    try {
      const questions = await this.questionService.getAllQuestions();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar questões.' });
    }
  }

  async getQuestionById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const question = await this.questionService.getQuestionById(id);
      if (question) {
        res.status(200).json(question);
      } else {
        res.status(404).json({ message: 'Questão não encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar questão.' });
    }
  }

  async getQuestionsByType(req: Request, res: Response): Promise<void> {
    try {
      const type = req.params.type as any as QuestionTypeEnum;
      const questions = await this.questionService.getQuestionsByType(type);
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar questões por tipo.' });
    }
  }
}