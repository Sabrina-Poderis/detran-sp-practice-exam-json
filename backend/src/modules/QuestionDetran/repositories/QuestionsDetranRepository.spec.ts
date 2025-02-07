import { mock, MockProxy } from 'jest-mock-extended';
import QuestionDetranModel from '@modules/QuestionDetran/models/QuestionDetranModel';
import QuestionsDetranRepository from '@modules/QuestionDetran/repositories/QuestionsDetranRepository';
import QuestionTypeEnum from '@modules/QuestionDetran/ts/enums/QuestionTypeEnum';
import QuestionOptionsEnum from '@modules/QuestionDetran/ts/enums/QuestionOptionsEnum';
import QuestionDetranInterface from '@modules/QuestionDetran/ts/interfaces/QuestionDetranInterface';

jest.mock('../models/QuestionDetranModel');

describe('QuestionsDetranRepository', () => {
  let repository: QuestionsDetranRepository;
  let questionMock: MockProxy<typeof QuestionDetranModel>;

  beforeEach(() => {
    repository = new QuestionsDetranRepository();
    questionMock = mock<typeof QuestionDetranModel>();
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
    {
      id: 3,
      type: QuestionTypeEnum.PLACAS_DE_TRANSITO,
      answer: QuestionOptionsEnum.C,
      question: 'Question 3',
      options: {
        A: 'Option A',
        B: 'Option B',
        C: 'Option C',
        D: 'Option D',
      },
    },
    {
      id: 4,
      type: QuestionTypeEnum.LEGISLACAO,
      checked: true,
      answer: QuestionOptionsEnum.UNKNOW, // "?"
      question: 'Question 4',
      options: {
        A: 'Option A',
        B: 'Option B',
        C: 'Option C',
        D: 'Option D',
      },
    },
  ];

  describe('findAll', () => {
    it('deve retornar apenas questões validadas por padrão e sem resposta "?"', async () => {
      (QuestionDetranModel.find as jest.Mock).mockReturnValue({
        exec: jest.fn().mockResolvedValue([mockQuestions[0]]),
      });

      const result = await repository.findAll();
      expect(result).toEqual([mockQuestions[0]]);
      expect(QuestionDetranModel.find).toHaveBeenCalledWith({
        checked: true,
        answer: { $ne: '?' },
      });
    });

    it('deve retornar todas as questões, exceto as que têm resposta "?", quando checked=false', async () => {
      (QuestionDetranModel.find as jest.Mock).mockReturnValue({
        exec: jest.fn().mockResolvedValue([mockQuestions[0], mockQuestions[1], mockQuestions[2]]), // Ignora a questão 4
      });

      const result = await repository.findAll(false);
      expect(result).toEqual([mockQuestions[0], mockQuestions[1], mockQuestions[2]]);
      expect(QuestionDetranModel.find).toHaveBeenCalledWith({
        answer: { $ne: '?' },
        $or: [{ checked: true }, { checked: false }, { checked: { $exists: false } }],
      });
    });
  });

  describe('findById', () => {
    it('deve retornar a questão correspondente ao ID, mesmo se a resposta for "?"', async () => {
      (QuestionDetranModel.findOne as jest.Mock).mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockQuestions[3]), // Questão com resposta "?"
      });

      const result = await repository.findById(4);
      expect(result).toEqual(mockQuestions[3]);
      expect(QuestionDetranModel.findOne).toHaveBeenCalledWith({
        id: 4,
      });
    });

    it('deve retornar null se a questão não for encontrada', async () => {
      (QuestionDetranModel.findOne as jest.Mock).mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });

      const result = await repository.findById(999);
      expect(result).toBeNull();
      expect(QuestionDetranModel.findOne).toHaveBeenCalledWith({
        id: 999,
      });
    });
  });

  describe('findByType', () => {
    it('deve retornar apenas questões validadas de um tipo específico por padrão, sem resposta "?"', async () => {
      (QuestionDetranModel.find as jest.Mock).mockReturnValue({
        exec: jest.fn().mockResolvedValue([mockQuestions[0]]),
      });

      const result = await repository.findByType(QuestionTypeEnum.PLACAS_DE_TRANSITO);
      expect(result).toEqual([mockQuestions[0]]);
      expect(QuestionDetranModel.find).toHaveBeenCalledWith({
        type: QuestionTypeEnum.PLACAS_DE_TRANSITO,
        checked: true,
        answer: { $ne: '?' },
      });
    });

    it('deve retornar todas as questões de um tipo específico quando checked=false, exceto as com resposta "?"', async () => {
      (QuestionDetranModel.find as jest.Mock).mockReturnValue({
        exec: jest.fn().mockResolvedValue([mockQuestions[0], mockQuestions[2]]), // Ignora questão com "?"
      });

      const result = await repository.findByType(QuestionTypeEnum.PLACAS_DE_TRANSITO, false);
      expect(result).toEqual([mockQuestions[0], mockQuestions[2]]);
      expect(QuestionDetranModel.find).toHaveBeenCalledWith({
        type: QuestionTypeEnum.PLACAS_DE_TRANSITO,
        answer: { $ne: '?' },
        $or: [{ checked: true }, { checked: false }, { checked: { $exists: false } }],
      });
    });
  });
});
