import QuestionDetranInterface from "@modules/QuestionDetran/ts/interfaces/QuestionDetranInterface";
import QuestionTypeEnum from "@modules/QuestionDetran/ts/enums/QuestionTypeEnum";
import QuestionDetranModel from "@modules/QuestionDetran/models/QuestionDetranModel";

export default class QuestionsDetranRepository {
  async findAll(checked: boolean = false): Promise<QuestionDetranInterface[]> {
    const query = {
      answer: { $ne: '?' },
      $or: [
        { checked: checked }, 
        { checked: { $exists: false } },
      ],
    };
    return await QuestionDetranModel.find(query).exec();
  }

  async findById(id: number): Promise<QuestionDetranInterface | null> {
    return await QuestionDetranModel.findOne({ id, answer: { $ne: '?' } }).exec();
  }

  async findByType(type: QuestionTypeEnum, checked: boolean = false): Promise<QuestionDetranInterface[]> {
    const query = {
      type,
      answer: { $ne: '?' },
      $or: [
        { checked: checked }, 
        { checked: { $exists: false } },
      ],
    };
    return await QuestionDetranModel.find(query).exec();
  }
}