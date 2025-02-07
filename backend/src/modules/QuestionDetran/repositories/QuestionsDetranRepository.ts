import QuestionDetranInterface from "@modules/QuestionDetran/interfaces/QuestionDetranInterface";
import QuestionTypeEnum from "@modules/QuestionDetran/interfaces/QuestionTypeEnum";
import QuestionDetranModel from "@modules/QuestionDetran/models/QuestionDetranModel";


export default class QuestionsDetranRepository {
  async findAll(): Promise<QuestionDetranInterface[]> {
    return await QuestionDetranModel.find().exec();
  }

  async findById(id: number): Promise<QuestionDetranInterface | null> {
    return await QuestionDetranModel.findOne({ id }).exec();
  }

  async findByType(type: QuestionTypeEnum): Promise<QuestionDetranInterface[]> {
    return await QuestionDetranModel.find({ type }).exec();
  }
}