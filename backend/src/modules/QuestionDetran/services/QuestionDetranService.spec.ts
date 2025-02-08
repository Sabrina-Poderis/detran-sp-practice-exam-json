import { mock, MockProxy } from 'jest-mock-extended';
import QuestionsDetranRepository from '@modules/QuestionDetran/repositories/QuestionsDetranRepository';
import QuestionDetranService from '@modules/QuestionDetran/services/QuestionDetranService';
import QuestionDetranMessagesEnum from '@modules/QuestionDetran/ts/enums/QuestionDetranMessagesEnum';
import QuestionTypeEnum from '@modules/QuestionDetran/ts/enums/QuestionTypeEnum';
import QuestionOptionsEnum from '@modules/QuestionDetran/ts/enums/QuestionOptionsEnum';
import QuestionDetranInterface from '@modules/QuestionDetran/ts/interfaces/QuestionDetranInterface';

describe('QuestionDetranService', () => {
  let service: QuestionDetranService;
  let repositoryMock: MockProxy<QuestionsDetranRepository>;

  beforeEach(() => {
    repositoryMock = mock<QuestionsDetranRepository>();
    service = new QuestionDetranService();
    (service as any).questionRepository = repositoryMock; // Substitui o repositório real pelo mock
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockQuestions: QuestionDetranInterface[] = [
    {
      id: 1,
      type: QuestionTypeEnum.PLACAS_DE_TRANSITO,
      checked: true,
      answer: QuestionOptionsEnum.A,
      question: 'Question 1',
      options: {
        A: 'Option A',
        B: 'Option B',
        C: 'Option C',
        D: 'Option D',
      },
    },
    {
      id: 2,
      type: QuestionTypeEnum.LEGISLACAO,
      checked: false,
      answer: QuestionOptionsEnum.B,
      question: 'Question 2',
      options: {
        A: 'Option A',
        B: 'Option B',
        C: 'Option C',
        D: 'Option D',
      },
    },
  ];

  describe('getAllQuestions', () => {
    it('deve retornar todas as questões filtrando corretamente', async () => {
      repositoryMock.findAll.mockResolvedValue(mockQuestions);

      const result = await service.getAllQuestions();
      expect(result).toEqual({ data: mockQuestions });
      expect(repositoryMock.findAll).toHaveBeenCalledWith(false);
    });

    it('deve lançar um erro interno ao falhar', async () => {
      repositoryMock.findAll.mockRejectedValue(new Error('DB error'));

      await expect(service.getAllQuestions()).rejects.toThrow(
        QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR
      );
    });
  });

  describe('getQuestionById', () => {
    it('deve retornar a questão correspondente ao ID', async () => {
      repositoryMock.findById.mockResolvedValue(mockQuestions[0]);

      const result = await service.getQuestionById(1);
      expect(result).toEqual({ data: mockQuestions[0] });
      expect(repositoryMock.findById).toHaveBeenCalledWith(1);
    });

    it('deve retornar mensagem de não encontrado se a questão não existir', async () => {
      repositoryMock.findById.mockResolvedValue(null);

      const result = await service.getQuestionById(999);
      expect(result).toEqual({ data: null, message: QuestionDetranMessagesEnum.QUESTION_NOT_FOUND });
      expect(repositoryMock.findById).toHaveBeenCalledWith(999);
    });

    it('deve lançar um erro interno ao falhar', async () => {
      repositoryMock.findById.mockRejectedValue(new Error('DB error'));

      await expect(service.getQuestionById(1)).rejects.toThrow(
        QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR
      );
    });
  });

  describe('getQuestionsByType', () => {
    it('deve retornar todas as questões de um tipo válido', async () => {
      repositoryMock.findByType.mockResolvedValue([mockQuestions[0]]);

      const result = await service.getQuestionsByType(QuestionTypeEnum.PLACAS_DE_TRANSITO);
      expect(result).toEqual({ data: [mockQuestions[0]] });
      expect(repositoryMock.findByType).toHaveBeenCalledWith(QuestionTypeEnum.PLACAS_DE_TRANSITO, false);
    });

    it('deve retornar lista vazia e mensagem de erro se o tipo for inválido', async () => {
      const result = await service.getQuestionsByType('INVALID_TYPE');
      expect(result).toEqual({ data: [], message: QuestionDetranMessagesEnum.INVALID_TYPE_ERROR });
    });

    it('deve retornar lista vazia se não houver questões do tipo especificado', async () => {
      repositoryMock.findByType.mockResolvedValue([]);

      const result = await service.getQuestionsByType(QuestionTypeEnum.LEGISLACAO);
      expect(result).toEqual({ data: [] });
    });

    it('deve lançar um erro interno ao falhar', async () => {
      repositoryMock.findByType.mockRejectedValue(new Error('DB error'));

      await expect(service.getQuestionsByType(QuestionTypeEnum.LEGISLACAO)).rejects.toThrow(
        QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR
      );
    });
  });
});
