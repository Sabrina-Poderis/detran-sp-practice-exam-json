import QuestionDetranInterface from "@modules/QuestionDetran/ts/interfaces/QuestionDetranInterface";
import QuestionTypeEnum from "@modules/QuestionDetran/ts/enums/QuestionTypeEnum";
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