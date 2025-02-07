import QuestionTypeEnum from "./QuestionTypeEnum";
import QuestionOptionsEnum from "./QuestionOptionsEnum";

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