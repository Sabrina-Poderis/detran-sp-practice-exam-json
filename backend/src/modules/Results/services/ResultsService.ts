import ResultsRepository from '@modules/Results/repositories/ResultsRepository';
import ResultInterface from '@modules/Results/ts/interfaces/ResultInterface';

class ResultsService {
  async saveResult(result: ResultInterface): Promise<void> {
    await ResultsRepository.saveResult(result);
  }

  async getUserResults(userId: string): Promise<ResultInterface[]> {
    return ResultsRepository.findResultsByUser(userId);
  }

  async getLatestResult(userId: string): Promise<ResultInterface | null> {
    return ResultsRepository.findLatestResultByUser(userId);
  }
}

export default new ResultsService();
