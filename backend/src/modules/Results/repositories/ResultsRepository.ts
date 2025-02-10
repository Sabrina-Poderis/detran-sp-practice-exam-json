import ResultModel from '@modules/Results/models/ResultModel';
import ResultInterface from '@modules/Results/ts/interfaces/ResultInterface';

class ResultsRepository {
  async saveResult(result: ResultInterface): Promise<void> {
    try {
      const newResult = new ResultModel(result);
      await newResult.save();
    } catch (error) {
      throw new Error('Erro ao salvar o resultado');
    }
  }

  async findResultsByUser(userId: string): Promise<ResultInterface[]> {
    return ResultModel.find({ user_id: userId }).exec();
  }

  async findLatestResultByUser(userId: string): Promise<ResultInterface | null> {
    return ResultModel.findOne({ user_id: userId })
      .sort({ created_at: -1 })
      .exec();
  }
}

export default new ResultsRepository();
