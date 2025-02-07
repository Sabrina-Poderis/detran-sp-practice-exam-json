import QuestionTypeEnum from "../enum/QuestionTypeEnum";
import QuestionOptionsEnum from "../enum/QuestionOptionsEnum";

export default interface QuestionDetranInterface {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: QuestionOptionsEnum;
  type: QuestionTypeEnum;
  checked?: boolean;
}