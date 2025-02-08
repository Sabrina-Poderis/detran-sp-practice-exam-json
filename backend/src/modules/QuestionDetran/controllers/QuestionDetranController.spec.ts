import { Request, Response } from 'express';
import { mock, MockProxy } from 'jest-mock-extended';
import QuestionDetranController from '@modules/QuestionDetran/controllers/QuestionDetranController';
import QuestionDetranService from '@modules/QuestionDetran/services/QuestionDetranService';
import QuestionDetranMessagesEnum from '@modules/QuestionDetran/ts/enums/QuestionDetranMessagesEnum';
import QuestionOptionsEnum from '@modules/QuestionDetran/ts/enums/QuestionOptionsEnum';
import QuestionTypeEnum from '@modules/QuestionDetran/ts/enums/QuestionTypeEnum';

describe('QuestionDetranController', () => {
  let controller: QuestionDetranController;
  let serviceMock: MockProxy<QuestionDetranService>;
  let reqMock: Partial<Request>;
  let resMock: Partial<Response>;

  beforeEach(() => {
    serviceMock = mock<QuestionDetranService>();
    controller = new QuestionDetranController();
    (controller as any).questionService = serviceMock;

    resMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllQuestions', () => {
    it('deve retornar todas as questões', async () => {
      reqMock = { query: { checked: 'true' } };
      serviceMock.getAllQuestions.mockResolvedValue({ data: [] });

      await controller.getAllQuestions(reqMock as Request, resMock as Response);

      expect(serviceMock.getAllQuestions).toHaveBeenCalledWith(true);
      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith({ data: [] });
    });

    it('deve retornar erro interno em caso de falha', async () => {
      serviceMock.getAllQuestions.mockRejectedValue(new Error('DB error'));

      await controller.getAllQuestions(reqMock as Request, resMock as Response);

      expect(resMock.status).toHaveBeenCalledWith(500);
      expect(resMock.json).toHaveBeenCalledWith({
        data: null,
        message: QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR,
      });
    });
  });

  describe('getQuestionById', () => {
    it('deve retornar a questão se o ID for válido', async () => {
      const mockQuestion = {
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
      reqMock = { params: { id: '1' } };
      serviceMock.getQuestionById.mockResolvedValue({ data: mockQuestion });

      await controller.getQuestionById(reqMock as unknown as Request, resMock as Response);

      expect(serviceMock.getQuestionById).toHaveBeenCalledWith(1);
      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith({ data: mockQuestion });
    });

    it('deve retornar erro 404 se a questão não for encontrada', async () => {
      reqMock = { params: { id: '999' } };
      serviceMock.getQuestionById.mockResolvedValue({ data: null, message: QuestionDetranMessagesEnum.QUESTION_NOT_FOUND });

      await controller.getQuestionById(reqMock as Request, resMock as Response);

      expect(resMock.status).toHaveBeenCalledWith(404);
      expect(resMock.json).toHaveBeenCalledWith({
        data: null,
        message: QuestionDetranMessagesEnum.QUESTION_NOT_FOUND,
      });
    });

    it('deve retornar erro 400 se o ID for inválido', async () => {
      reqMock = { params: { id: 'abc' } };
    
      await controller.getQuestionById(reqMock as Request, resMock as Response);
      
      expect(resMock.status).toHaveBeenCalledWith(400);
      expect(resMock.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: QuestionDetranMessagesEnum.INVALID_ID,
        })
      );
    });
    
  });

  describe('getQuestionsByType', () => {
    it('deve retornar todas as questões de um tipo válido', async () => {
      reqMock = { params: { type: 'PLACAS_DE_TRANSITO' }, query: { checked: 'false' } };
      serviceMock.getQuestionsByType.mockResolvedValue({ data: [] });

      await controller.getQuestionsByType(reqMock as Request, resMock as Response);

      expect(serviceMock.getQuestionsByType).toHaveBeenCalledWith('PLACAS_DE_TRANSITO', false);
      expect(resMock.status).toHaveBeenCalledWith(200);
      expect(resMock.json).toHaveBeenCalledWith({ data: [] });
    });

    it('deve retornar erro 400 se o tipo for inválido', async () => {
      reqMock = { params: { type: 'INVALID_TYPE' } };
      serviceMock.getQuestionsByType.mockResolvedValue({
        data: [],
        message: QuestionDetranMessagesEnum.INVALID_TYPE_ERROR,
      });

      await controller.getQuestionsByType(reqMock as Request, resMock as Response);

      expect(resMock.status).toHaveBeenCalledWith(400);
      expect(resMock.json).toHaveBeenCalledWith({
        data: [],
        message: QuestionDetranMessagesEnum.INVALID_TYPE_ERROR,
      });
    });

    it('deve retornar erro interno em caso de falha', async () => {
      reqMock = { params: { type: 'LEGISLACAO' } };
      serviceMock.getQuestionsByType.mockRejectedValue(new Error('DB error'));

      await controller.getQuestionsByType(reqMock as Request, resMock as Response);

      expect(resMock.status).toHaveBeenCalledWith(500);
      expect(resMock.json).toHaveBeenCalledWith({
        data: null,
        message: QuestionDetranMessagesEnum.INTERNAL_SERVER_ERROR,
      });
    });
  });
});
