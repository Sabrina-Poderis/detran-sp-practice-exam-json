import QuestionsDetranRepository from '@modules/QuestionDetran/repositories/QuestionsDetranRepository';
import QuestionDetranInterface from '@modules/QuestionDetran/interfaces/QuestionDetranInterface';
import QuestionTypeEnum from '@modules/QuestionDetran/interfaces/QuestionTypeEnum';

export default class QuestionDetranService {
  private questionRepository: QuestionsDetranRepository;

  constructor() {
    this.questionRepository = new QuestionsDetranRepository();
  }

  async getAllQuestions(): Promise<QuestionDetranInterface[]> {
    return await this.questionRepository.findAll();
  }

  async getQuestionById(id: number): Promise<QuestionDetranInterface | null> {
    return await this.questionRepository.findById(id);
  }

  async getQuestionsByType(type: QuestionTypeEnum): Promise<QuestionDetranInterface[]> {
    return await this.questionRepository.findByType(type);
  }
}