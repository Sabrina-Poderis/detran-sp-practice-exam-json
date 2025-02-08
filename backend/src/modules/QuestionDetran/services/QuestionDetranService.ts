import QuestionsDetranRepository from '@modules/QuestionDetran/repositories/QuestionsDetranRepository';
import QuestionDetranInterface from '@modules/QuestionDetran/ts/interfaces/QuestionDetranInterface';
import QuestionTypeEnum from '@modules/QuestionDetran/ts/enums/QuestionTypeEnum';
import QuestionDetranMessagesEnum from '@modules/QuestionDetran/ts/enums/QuestionDetranMessagesEnum';

export default class QuestionDetranService {
  private questionRepository: QuestionsDetranRepository;

  constructor() {
    this.questionRepository = new QuestionsDetranRepository();
  }

  async getAllQuestions(checked: boolean = false): Promise<{ data: QuestionDetranInterface[] }> {
    try {
      const questions = await this.questionRepository.findAll(checked);
      return { data: questions };
    } catch (error) {
      throw new Error(QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR);
    }
  }

  async getQuestionById(id: number): Promise<{ data: QuestionDetranInterface | null; message?: string }> {
    try {
      const question = await this.questionRepository.findById(id);
      if (question) {
        return { data: question };
      }
      return { data: null, message: QuestionDetranMessagesEnum.QUESTION_NOT_FOUND };
    } catch (error) {
      throw new Error(QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR);
    }
  }

  async getQuestionsByType(
    type: string,
    checked: boolean = false
  ): Promise<{ data: QuestionDetranInterface[]; message?: string }> {
    try {
      const validTypes = Object.values(QuestionTypeEnum);
      if (!validTypes.includes(type as QuestionTypeEnum)) {
        return { data: [], message: QuestionDetranMessagesEnum.INVALID_TYPE_ERROR };
      }

      const questions = await this.questionRepository.findByType(type as QuestionTypeEnum, checked);
      return { data: questions };
    } catch (error) {
      throw new Error(QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR);
    }
  }
}
