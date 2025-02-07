import QuestionDetranInterface from "@modules/QuestionDetran/ts/interfaces/QuestionDetranInterface";
import QuestionTypeEnum from "@modules/QuestionDetran/ts/enums/QuestionTypeEnum";
import QuestionDetranModel from "@modules/QuestionDetran/models/QuestionDetranModel";

export default class QuestionsDetranRepository {
  async findAll(includeUnchecked: boolean = false): Promise<QuestionDetranInterface[]> {
    const query: { answer: { $ne: string }, checked?: boolean} = { answer: { $ne: '?' } };
    if (!includeUnchecked) {
      query.checked = true;
    }
    return await QuestionDetranModel.find(query).exec();
  }

  async findById(id: number): Promise<QuestionDetranInterface | null> {
    return await QuestionDetranModel.findOne({ id, answer: { $ne: '?' } }).exec();
  }

  async findByType(type: QuestionTypeEnum, includeUnchecked: boolean = false): Promise<QuestionDetranInterface[]> {
    const query: { type: QuestionTypeEnum, answer: { $ne: string }, checked?: boolean } = { type, answer: { $ne: '?' } };
    if (!includeUnchecked) {
      query.checked = true;
    }
    return await QuestionDetranModel.find(query).exec();
  }
}