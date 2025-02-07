import QuestionTypeEnum from "@modules/QuestionDetran/ts/enums/QuestionTypeEnum";
import QuestionOptionsEnum from "@modules/QuestionDetran/ts/enums/QuestionOptionsEnum";

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